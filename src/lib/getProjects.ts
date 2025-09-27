import { readFileSync, readdirSync } from 'node:fs';
import config from '$lib/config';
import { join } from 'node:path';

export type ProjectData = {
  title: string;
  description: string;
  source?: string;
  source_name?: string;
  format: 'web' | "article"
  tags: string[];
} | {
  title: string;
  description: string;
  source?: string;
  source_name?: string;
  format: 'external'
  url: string;
  tags: string[];
};
;

export function getProjectList() {
  return readdirSync(config.PROJECTS_PATH).filter((val) => !val.startsWith("."));
}

export function getProjectResource(projectName: string, resourceName: string) {
  return readFileSync(join(config.PROJECTS_PATH, projectName, resourceName));
}

export function getProjectArticle(projectName: string) {
  return readFileSync(join(config.PROJECTS_PATH, projectName, 'project.md'), 'utf-8');
}

export function getProjectMetadata(projectName: string) {
  let metadata = JSON.parse(
    readFileSync(join(config.PROJECTS_PATH, projectName, 'project.json'), 'utf-8')
  ) as ProjectData;
  if (metadata.format === "external") {
    return metadata
  } else {
    return {
      ...metadata,
      url: projectName
    };
  }
}
