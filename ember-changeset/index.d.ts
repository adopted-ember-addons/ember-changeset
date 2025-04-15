import { BufferedChangeset } from 'validated-changeset';
import type { HelperLike } from '@glint/template';

type BufferedChangesetConstructorParameters = ConstructorParameters<
  typeof BufferedChangeset
>;

type Config = BufferedChangesetConstructorParameters[3] & {
  changeset?: typeof EmberChangeset;
};

type changesetFunctionsParameters = [
  BufferedChangesetConstructorParameters[0],
  BufferedChangesetConstructorParameters[1]?,
  BufferedChangesetConstructorParameters[2]?,
  Config?,
];

export class EmberChangeset extends BufferedChangeset {}
export function changeset(
  ...args: changesetFunctionsParameters
): EmberChangeset;
export function Changeset(
  ...args: changesetFunctionsParameters
): EmberChangeset;

type changesetGet = HelperLike<{
  Args: {
    Positional: [
      changeset: BufferedChangeset | EmberChangeset,
      fieldPath: string,
    ];
  };
  Return: unknown;
}>;

type changesetSet = HelperLike<{
  Args: {
    Positional: [
      changeset: BufferedChangeset | EmberChangeset,
      fieldPath: string,
    ];
  };
  Return: (value: unknown) => void;
}>;
