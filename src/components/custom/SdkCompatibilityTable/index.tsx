import React from 'react';
import type { SdkCompatibility } from '@site/src/datasets/types';
import { features } from '@site/src/datasets/constants';
import { Popover } from '@headlessui/react';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';

import Link from '@docusaurus/Link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SdkCompatibilityTable({ compatibility }: { compatibility: SdkCompatibility[] }) {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          {compatibility.map((row) => (
            <th>{row.name}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr key="Status">
          <th>Status</th>
          {compatibility.map(() => (
            <td></td>
          ))}
        </tr>

        <tr key="spec">
          <td>
            Spec version
            <span className="has-tooltip">
              <Popover className="tooltip rounded shadow-[0_1.5px_3px_0_rgba(0,0,0,0.15)] p-2 bg-gray-100 text-emphasis-800 max-w-xs">
                <p className="text-sm">The version of the specification that the SDK is fully compliant with.</p>
              </Popover>
              <FontAwesomeIcon className="h-4 w-4 mx-1 opacity-80 hover:opacity-100" icon={faCircleExclamation} />
            </span>
          </td>
          {compatibility.map((row) => (
            <td>
              <Link to={row.spec.href}>{row.spec.version}</Link>
            </td>
          ))}
        </tr>

        <tr key="version">
          <td>
            Release version
            <span className="has-tooltip">
              <Popover className="tooltip rounded shadow-[0_1.5px_3px_0_rgba(0,0,0,0.15)] p-2 bg-gray-100 text-emphasis-800 max-w-xs">
                <div className="text-sm">The latest published release version.</div>
              </Popover>
              <FontAwesomeIcon className="h-4 w-4 mx-1 opacity-80 hover:opacity-100" icon={faCircleExclamation} />
            </span>
          </td>
          {compatibility.map((row) => (
            <td>
              <Link to={row.release.href}>{row.release.version}</Link>
            </td>
          ))}
        </tr>

        <tr key="stable">
          <td>
            Stable release
            <span className="has-tooltip">
              <Popover className="tooltip rounded shadow-[0_1.5px_3px_0_rgba(0,0,0,0.15)] p-2 bg-gray-100 text-emphasis-800 max-w-xs">
                <p className="text-sm">
                  OpenFeature employs semantic versioning for release versions. SDKs below 1.0 aim to minimize breaking
                  changes but are allowed in order to avoid long-term technical debt.
                </p>
                <ul className="text-xs list-none mt-2">
                  <li>✅: A major version 1 or greater is available</li>
                  <li>⚠️: A major version hasn't been released</li>
                </ul>
              </Popover>
              <FontAwesomeIcon className="h-4 w-4 mx-1 opacity-80 hover:opacity-100" icon={faCircleExclamation} />
            </span>
          </td>
          {compatibility.map((row) => (
            <td>{row.release.stable ? '✅' : '⚠️'}</td>
          ))}
        </tr>

        <tr key="features">
          <th>Features</th>
          {compatibility.map(() => (
            <td></td>
          ))}
        </tr>

        {features.map((feat) => {
          return (
            <tr key={feat}>
              <td>{feat}</td>
              {compatibility.map((row) => {
                return (
                  <td>
                    <Link to={row.features[feat].path}>{row.features[feat].status}</Link>
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
