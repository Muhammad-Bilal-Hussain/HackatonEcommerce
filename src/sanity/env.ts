export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-01-04'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
  (process.env.NEXT_PUBLIC_SANITY_TOKEN ||
    "skQK5AedH3ShJlPkh2Lfc8hDVMFUXsBXDTQr4tUzVuYAm4RierBMJBYrGa3MKZzgjRpTucf3eaymFm7tG15eSN6QBKj8RtrcwVsacmh7wgFIRHt8MNPdhKBlFya1GSAJwJLC71KnyQ9zV0yCZeYrwMH6QsuiYYf7jRfw3nDavFZFkVj2eBVW"),
  "Missing environment variable: NEXT_PUBLIC_SANITY_TOKEN"
  );

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
