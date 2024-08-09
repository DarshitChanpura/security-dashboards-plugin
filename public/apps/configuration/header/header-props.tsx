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

import { CoreStart } from 'opensearch-dashboards/public';
import { ResourceType } from 'plugins/security-dashboards-plugin/common';
import { NavigationPublicPluginStart } from 'src/plugins/navigation/public';
import { TopNavControlData } from 'src/plugins/navigation/public/top_nav_menu/top_nav_control_data';

export interface HeaderProps {
  navigation: NavigationPublicPluginStart;
  coreStart: CoreStart;
  fallBackComponent: JSX.Element;
  resourceType?: ResourceType;
  pageTitle?: string;
  subAction?: string;
  count?: number;
}

export interface ControlProps {
  controlControls?: TopNavControlData[];
}

export interface DescriptionProps {
  descriptionControls?: TopNavControlData[];
}
