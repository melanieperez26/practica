import { MovieDatasource } from '../../domain';
import { MovieMemoryDatasourceImpl } from './movie.memory.datasource.impl';


export enum MovieDatasourceType {
    MEMORY = 'memory',
    // TYPEORM = 'typeorm',
    // PRISMA = 'prisma'
}

// Datos de ejemplo para inicializar el datasource de memoria
const SAMPLE_MOVIES = [
    {
        id: '1',
        title: 'Matrix',
        synopsis: 'Un hacker descubre la verdad sobre su realidad.',
        minAge: 16,
        image: 'matrix.jpg',
        tags: ['acción', 'ciencia ficción']
    },
    {
        id: '2',
        title: 'Toy Story',
        synopsis: 'Los juguetes cobran vida cuando los humanos no están.',
        minAge: 0,
        image: 'toystory.jpg',
        tags: ['animación', 'familiar']
    }
];

export class MovieDatasourceConfig {
    private static instance: MovieDatasource;

    static getDatasource(type: MovieDatasourceType = MovieDatasourceType.MEMORY): MovieDatasource {
        if (!this.instance) {
            this.instance = this.createDatasource(type);
        }
        return this.instance;
    }

    static setDatasource(type: MovieDatasourceType): void {
        this.instance = this.createDatasource(type);
    }

    /**
     * Crea un nuevo datasource de memoria con datos opcionales
     */
    static createMemoryDatasource(initialData?: any[]): MovieMemoryDatasourceImpl {
        return new MovieMemoryDatasourceImpl(initialData || SAMPLE_MOVIES);
    }

    /**
     * Crea un datasource de memoria vacío
     */
    static createEmptyMemoryDatasource(): MovieMemoryDatasourceImpl {
        return new MovieMemoryDatasourceImpl([]);
    }

    private static createDatasource(type: MovieDatasourceType): MovieDatasource {
        switch (type) {
            // case MovieDatasourceType.TYPEORM:
            //     return new MovieTypeOrmDatasourceImpl();
            // case MovieDatasourceType.PRISMA:
            //     return new MovieDatasourceImpl();
            case MovieDatasourceType.MEMORY:
            default:
                return this.createMemoryDatasource();
        }
    }

    /**
     * Obtiene el tipo de datasource actual
     */
    static getCurrentDatasourceType(): string {
        if (this.instance instanceof MovieMemoryDatasourceImpl) {
            return 'MEMORY';
        }
        // else if (this.instance instanceof MovieTypeOrmDatasourceImpl) {
        //     return 'TYPEORM';
        // } else if (this.instance instanceof MovieDatasourceImpl) {
        //     return 'PRISMA';
        // }
        return 'UNKNOWN';
    }
}