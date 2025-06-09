import { Router, Request, Response } from 'express';
import { MovieRepositoryImpl } from '../../infrastructure/repositories/movie.repository.impl';
import { MovieDatasourceConfig } from '../../infrastructure/datasource/movie-datasource.config';

export class MovieRoutes {
    static get routes(): Router {
        const router = Router();

        // Usar el datasource configurado globalmente
        const datasource = MovieDatasourceConfig.getDatasource();
        const movieRepository = new MovieRepositoryImpl(datasource);

        // Listar todas las películas
        router.get('/', async (req: Request, res: Response) => {
            const movies = await movieRepository.getAll();
            res.json(movies);
        });

        // Obtener una película por id
        router.get('/:id', async (req: Request, res: Response) => {
            const movie = await movieRepository.findById(req.params.id);
            if (!movie) return res.status(404).json({ error: 'Movie not found' });
            res.json(movie);
        });

        // Crear una nueva película
        router.post('/', async (req: Request, res: Response) => {
            try {
                const created = await movieRepository.create(req.body);
                res.status(201).json(created);
            } catch (error) {
                res.status(400).json({ error: String(error) });
            }
        });

        // Actualizar una película
        router.put('/:id', async (req: Request, res: Response) => {
            try {
                const updated = await movieRepository.updateById({ id: req.params.id, ...req.body });
                res.json(updated);
            } catch (error) {
                res.status(400).json({ error: String(error) });
            }
        });

        // Eliminar una película
        router.delete('/:id', async (req: Request, res: Response) => {
            try {
                const deleted = await movieRepository.deleteById(req.params.id);
                res.json(deleted);
            } catch (error) {
                res.status(400).json({ error: String(error) });
            }
        });

        return router;
    }
}