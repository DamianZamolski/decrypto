export class CreateBranchBodyDto {
  repositories: Array<string> = ['backend-portal'];

  branchName: string = 'release/x.x.x';

  baseBranch: string = 'development';
}
