import { Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';

@Injectable()
export class MessagesRepository {
  async findOne(id: string) {
    const contents = await fs.readFile(__dirname + 'messages.json', 'utf8');
    const messages = JSON.parse(contents);
    return messages.find((m: any) => m.id === id);
  }

  async findAll() {
    const contents = await fs.readFile(__dirname + '/messages.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages;
  }

  async create(message: string) {
    const contents = await fs.readFile(__dirname + 'messages.json', 'utf8');
    const messages = JSON.parse(contents);

    const newMessage = {
      id: Math.floor(Math.random() * 999),
      content: message,
    };

    await fs.writeFile(
      __dirname + 'messages.json',
      JSON.stringify([...messages, newMessage]),
    );
  }
}
