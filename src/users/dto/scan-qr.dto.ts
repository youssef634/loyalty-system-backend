import { IsOptional } from 'class-validator';

export class ScanQrDto {
    @IsOptional()
    qrData?: string;
}
