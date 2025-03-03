import { Module, forwardRef } from "@nestjs/common";  
import { ResourceTagEntity } from "./resource-tag.entity.js";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ResourceModule } from "../resource/resource.module.js";

@Module({
  imports: [TypeOrmModule.forFeature([ResourceTagEntity]),
    forwardRef(() => ResourceModule)],
  exports: [ResourceTagEntity],
})
export class ResourceTagModule {}