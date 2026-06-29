import { readFileSync, readdirSync } from 'node:fs';
import config from '$lib/config';
import { join } from 'node:path';

type DeploymentModule = {
    "type": "deployment",
    "url": string,
}

type SourceModule = {
    "type": "source",
    "url": string,
    "name": string,
}

type ArticleModule = {
    "type": "article",
}

export type ProjectData = {
    title: string;
    id: string;
    description: string;
    tags: string[];
    hide?: boolean;
    cover?: string;
    modules: (DeploymentModule | SourceModule | ArticleModule)[]
};

export function getProjectList(): string[] {
    return readdirSync(config.PROJECTS_PATH).filter((val) => !val.startsWith("."));
}

export function getProjectResource(projectName: string, resourceName: string): Buffer<ArrayBufferLike> {
    let normalizedProjectName = projectName.replace(".", "").replace("/", "");
    let normalizedResourceName = resourceName.replace("..", "");

    return readFileSync(join(config.PROJECTS_PATH, normalizedProjectName, "assets", normalizedResourceName));
}

export function getProjectArticle(projectName: string): string {
    return readFileSync(join(config.PROJECTS_PATH, projectName, 'assets', 'article.md'), 'utf-8');
}

export function getProjectMetadata(projectName: string): ProjectData {
    let metadata = {
        id: projectName,
        ...JSON.parse(readFileSync(join(config.PROJECTS_PATH, projectName, 'project.json'), 'utf-8'))
    } as ProjectData;

    return metadata
}
