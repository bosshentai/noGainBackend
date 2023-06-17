#!/bin/bash


yarn  
npx prisma generate 
npx prisma migrate dev

yarn start:dev