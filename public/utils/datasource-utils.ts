/*
 *   Copyright OpenSearch Contributors
 *
 *   Licensed under the Apache License, Version 2.0 (the "License").
 *   You may not use this file except in compliance with the License.
 *   A copy of the License is located at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   or in the "license" file accompanying this file. This file is distributed
 *   on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 *   express or implied. See the License for the specific language governing
 *   permissions and limitations under the License.
 */

import { url } from 'inspector';
import { DataSourceOption } from 'src/plugins/data_source_management/public/components/data_source_menu/types';

export function createDataSourceQuery(dataSourceId: string) {
  return { dataSourceId };
}

const DATASOURCEURLKEY = 'dataSource';

export function getClusterInfoIfEnabled(dataSourceEnabled: boolean, cluster: DataSourceOption) {
  if (dataSourceEnabled) {
    return `for ${cluster.label || 'Local cluster'}`;
  }
  return '';
}

export function getDataSourceFromUrl(): DataSourceOption {
  const urlParams = new URLSearchParams(window.location.search);
  const dataSourceParam = (urlParams && urlParams.get(DATASOURCEURLKEY)) || '{}';
  return JSON.parse(dataSourceParam);
}

export function setDataSourceInUrl(dataSource: DataSourceOption) {
  const url = new URL(window.location.href);
  url.searchParams.set(DATASOURCEURLKEY, JSON.stringify(dataSource));
  window.history.replaceState({}, '', url.toString());
}
