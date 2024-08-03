/*
 * Copyright 2019 balena.io
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import GithubSvg from '@fortawesome/fontawesome-free/svgs/brands/github.svg';
import * as _ from 'lodash';
import * as React from 'react';
import { Box, Checkbox, Divider, Flex, Txt } from 'rendition';

import { version, packageType } from '../../../../../package.json';
import * as settings from '../../models/settings';
import { open as openInternalRemote } from '../../os/open-internal-remote/services/open-internal-remote';
import { open as openExternal } from '../../os/open-external/services/open-external';
import { Modal } from '../../styled-components';
import * as i18next from 'i18next';

interface Setting {
	name: string;
	label: string | JSX.Element;
}

async function getSettingsList(): Promise<Setting[]> {
	const list: Setting[] = [
		{
			name: 'verify',
			label: i18next.t('settings.verify'),
			tooltip: i18next.t('settings.verifyDesc'),
		},
		{
			name: 'autoBlockmapping',
			label: i18next.t('settings.trimExtPartitions'),
			tooltip: i18next.t('settings.trimExtPartitions'),
		},
		{
			name: 'decompressFirst',
			label: i18next.t('settings.decompressFirst'),
			tooltip: i18next.t('settings.decompressFirst'),
		},
	];
	return list;
}

interface SettingsModalProps {
	toggleModal: (value: boolean) => void;
}

export function SettingsModal({ toggleModal }: SettingsModalProps) {
	const [settingsList, setCurrentSettingsList] = React.useState<Setting[]>([]);
	React.useEffect(() => {
		(async () => {
			if (settingsList.length === 0) {
				setCurrentSettingsList(await getSettingsList());
			}
		})();
	});
	const [currentSettings, setCurrentSettings] = React.useState<
		_.Dictionary<boolean>
	>({});
	React.useEffect(() => {
		(async () => {
			if (_.isEmpty(currentSettings)) {
				setCurrentSettings(await settings.getAll());
			}
		})();
	});

	const toggleSetting = async (setting: string) => {
		const value = currentSettings[setting];
		await settings.set(setting, !value);
		setCurrentSettings({
			...currentSettings,
			[setting]: !value,
		});
	};

	return (
		<Modal
			titleElement={
				<Txt fontSize={24} mb={24}>
					<u>
						{i18next.t('settings.settings')}
					</u>
				</Txt>
			}
			done={() => toggleModal(false)}
		>
			<Txt fontSize={24} mb={14}>
				<u>
					{i18next.t('settings.settings')}
				</u>
			</Txt>
			<Flex flexDirection="column">
				{settingsList.map((setting: Setting, i: number) => {
					return (
						<Flex key={setting.name} mt={14} mb={14}>
							<Checkbox
								toggle
								tabIndex={6 + i}
								label={setting.label}
								tooltip={setting.tooltip}
								checked={currentSettings[setting.name]}
								onChange={() => toggleSetting(setting.name)}
							/>
						</Flex>
					);
				})}
				<Divider color="#00aeef" />
				<Flex
					mt={14}
					alignItems="center"
					color="#00aeef"
					title="View Changelog"
					style={{
						width: 'fit-content',
						cursor: 'pointer',
						fontSize: 14,
					}}
					onClick={() =>
						openInternalRemote(
							'https://github.com/Alex313031/etcher-ng/blob/master/CHANGELOG.md',
						)
					}
				>
					<GithubSvg
						height="1em"
						fill="currentColor"
						style={{ marginRight: 8 }}
					/>
					<Txt style={{ borderBottom: '1px solid #00aeef' }}>{version}</Txt>
				</Flex>
			</Flex>
		</Modal>
	);
}
