import { Entity, CreateDateColumn, UpdateDateColumn, PrimaryColumn, Column } from 'typeorm'

import { v4 as uuid } from 'uuid' // identificador universal unico

@Entity('provider')
class Provider {

  @PrimaryColumn()
  id: string;

  @Column()
  employee: string;

  @Column()
  branch: string;

  @Column()
  productType: string;

  @Column()
  providerName: string;

  
  @Column()
  costCenter: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid()
    }
  }
}

export { Provider }
