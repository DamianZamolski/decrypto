export class DeployBodyDto {
  environments: Array<string> = [
    'prod-blue',
    'prod-green',
    'uat',
    'dev-1',
    'dev-2',
  ];

  repos!: Array<string>;

  branch: string = 'development';
}
