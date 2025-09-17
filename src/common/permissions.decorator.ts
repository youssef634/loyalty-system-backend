import { SetMetadata } from '@nestjs/common';

export const Permissions = (page: string) => SetMetadata('page', page);