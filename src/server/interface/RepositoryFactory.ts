export type RepositoryFactory<T, CreateRequest, UpdateRequest> = {
    findMany: () => Promise<T[] | null>;
    findUniqueId: (id: number) => Promise<T | null>;
    insertOnce: (request: CreateRequest) => Promise<T>;
    updateOnce: (id: number, request: UpdateRequest) => Promise<T>;
    deleteOnce: (id: number) => Promise<T>;
};
