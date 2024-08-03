/*
 * Copyright 2016 balena.io
 * Copyright 2026 FireRat666
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

type AnalyticsPayload = _.Dictionary<any>;

/**
 * @summary Log an event
 *
 * @description
 * No-op: all analytics and telemetry have been removed from this fork
 * for privacy. This stub exists only so callers keep compiling.
 */
export async function logEvent(message: string, data: AnalyticsPayload = {}) {
	return;
}

/**
 * @summary Log an exception
 *
 * @description
 * Exceptions are only printed to the local console. No error reporting
 * service is contacted.
 */
export function logException(error: any) {
	console.error(error);
}
