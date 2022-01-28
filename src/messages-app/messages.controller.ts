import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages(): string {
    return 'Hi getMessages';
  }

  @Post()
  createMessages(@Body() body: CreateMessageDto): string {
    return `${body}`;
  }

  @Get('/:id')
  getMessage(@Param('id') id: string): string {
    console.log(id);
    return `Hi getMessage ${id}`;
  }
}
