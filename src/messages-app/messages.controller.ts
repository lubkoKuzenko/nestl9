import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDto } from './dto';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor(public messagesService: MessagesService) {}

  @Get()
  listMessages(): Promise<void> {
    return this.messagesService.findAll();
  }

  @Post()
  createMessages(@Body() body: CreateMessageDto): Promise<void> {
    return this.messagesService.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string): Promise<void> {
    const message = await this.messagesService.findOne(id);

    if (message === undefined) {
      throw new NotFoundException('Message not found');
    }

    return message;
  }
}
