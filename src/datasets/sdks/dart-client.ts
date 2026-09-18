import { SDK } from '.';

export const DartClient: SDK = {
  name: 'Dart',
  category: 'Client',
  description: 'OpenFeature static-context Dart client SDK for Dart and Flutter applications (beta).',
  repo: 'dart-sdk',
  folder: '/packages/openfeature_dart_client_sdk',
  logoKey: 'dart-no-fill.svg',
  technology: 'Dart',
  href: '/docs/reference/sdks/client/dart',
  // The beta has not completed conformance; do not imply a stable support matrix.
  includeInSupportMatrix: false,
};
