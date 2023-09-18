import type { BaseSchema, Input } from '../../types.ts';

/**
 * Checks if the input matches the scheme. By using a type predicate, this
 * function can be used as a type guard.
 *
 * @param schema The schema to be used.
 * @param input The input to be tested.
 *
 * @returns Whether the input matches the scheme.
 */
export function isType<TSchema extends BaseSchema>(
  schema: TSchema,
  input: unknown
): input is Input<TSchema> {
  return !schema._parse(input, { skipPipe: true, abortEarly: true }).issues;
}
