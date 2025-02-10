import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { getDataSourceOptions } from './ormconfig';

const configService = new ConfigService();

const dataSource = new DataSource(getDataSourceOptions(configService));

export default dataSource;