import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  getSettings() {
    return {
      category: [
        { title: "Photoshop" },
        { title: "UI/UX" },
        { title: "Web Design" },
        { title: "Web Dev" },
        { title: "Wordpress" },
        { title: "Adobe XD" },
        { title: "Sketch App" },
        { title: "Illustrator" }
      ],
      number: "999-555-555-555"
    };
  }
}
