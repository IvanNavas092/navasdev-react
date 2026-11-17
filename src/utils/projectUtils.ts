
import { projectList } from './projects';
import type Project from '../interfaces/Projects';

export const getProjectById = (id: string): Project => {
    const project = projectList.find((p) => p.id === id);
    if (!project) {
        throw new Error(`Project with id ${id} not found`);
    }
    return project;
};
