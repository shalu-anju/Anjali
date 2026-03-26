
import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-birthday-wish',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './birthday-wish.component.html',
  styleUrls: ['./birthday-wish.component.css']
})
export class BirthdayWishComponent implements OnInit, OnDestroy {
     constructor(private cdr: ChangeDetectorRef) {}
  // App states: 'loading', 'countdown', 'reveal', 'opened'
  state: 'loading' | 'countdown' | 'reveal' | 'opened' = 'loading';

  // // Set your birthday date here (YYYY-MM-DDTHH:MM:SS)
  // birthday: Date = new Date('2026-01-20T00:00:00');
  // Set birthday to March 29, 2026 at 12:00 AM
  birthday: Date = new Date('2026-03-29T00:00:00');
  now: Date = new Date();
  countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 };
  intervalId: any;
  loadingTimeout: any;
  cardOpened = false;

  heartfeltMessage = `Happie Bday to My one of the Most important person 🎂❤️🧿.. Nee en life kulla enter agurarathuku munnadi , I was so hurting , nd rompave broken ah,  overthink panitu, aluthutu irupen vaalkaiye veruthutu suthitu irunthen, like enavo po nu poitu irunthuchi.. I thought never love again anyone nd blind ah inime evanaume trust pannave koodathu decide pannen.. That time suddenly u came into my life da.. like ellame kai vidura time la universe enagakaga una en life la send paniruku ena heal panna... but honest ah onnu solren not all men's r same until, una meet panra varaikum ni rompa different to others da.. U r a pure hearted soul thangame.. When i waited for so long to be treated right way.. The way u care for me is something, na imagine pannatha vida u treated me so well .. seriously im so grateful to having in my life🙏🏻🙇‍♀️.. Ni rompa matured ah handle panuva da  En childish behaviour ,enoda mood swings , enoda overthinking lam... nd rompa important thing enaku rompa supportive ah irupa nd u understanding every suiation da.. Unoda patience level nd antha observation la pathu unmela iruka love nd respect more than +++ increase aite iruku every single day.. when at my lowest stage unoda wrds than ena feel better ah aakum.. Enakaga oruthan irukan ena pathuka ena care panika🥹.. Enoda daily routines day start wid unoda text nd ends wid vdo call recorders than, un voice kekama oru naal thunathu ila .. One day pesama irunthalum our old chats ah read panitu unoda presence ah feel panuven... Even una pakka oru 1% chance irunthalum athu 5 mints ah irunthalum sari , I travel to see u da karuvaya 🫂.. Bcoz I really njyed every moment spent wid u.. That's is best moments of my life da .. nd mukkiyam ah no one has ever loved u the way I do💯.. similarly un alavuku ena yarume love pannathu ila da.. nd ur love is enough for me.. I would like to choose u again nd again in every universe ✨️.. Una ithe alavuku love panite irupen epome un place ah, no one can replaced thangame ❤️.. Unoda happiness la ilanalum kantipa unoda sad moments la unakaga irupen da epome.. I really love u thangame katiko.. Una epome mis panite irupen.. U r my vedama kedaicha varam da like TEASURE 💟 I never ever leave u da promise.. Unoda niraya travel pannanum asa.. Kantipa panuven.. nd thanks for making me feel like the most SPL girl in the world 🌎 🥺..  Rompa love u da once again happiest bday my pure one 💎...`;
  ngOnInit() {
    // Show loading for 2.5s, then start countdown
    this.loadingTimeout = setTimeout(() => {
        this.state = 'countdown';
        this.cdr.detectChanges();
        this.startCountdown();
    }, 2500);
  }

  ngOnDestroy() {
    clearTimeout(this.loadingTimeout);
    clearInterval(this.intervalId);
  }

  startCountdown() {
    this.updateCountdown();
    this.intervalId = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  updateCountdown() {
    this.now = new Date();
    const diff = this.birthday.getTime() - this.now.getTime();
    if (diff <= 0) {
      this.countdown = { days: 0, hours: 0, minutes: 0, seconds: 0 };
      clearInterval(this.intervalId);
    } else {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      this.countdown = { days, hours, minutes, seconds };
    }
    this.cdr.detectChanges();
  }

  onReveal() {
    this.state = 'reveal';
  }

  openCard() {
    if (!this.cardOpened){
      this.cardOpened = true;
      this.state = 'opened';
    }
    else {
    this.cardOpened = false;
    this.state = 'reveal';
    }
  }

  isCountdownZero() {
    return (
      this.countdown.days === 0 &&
      this.countdown.hours === 0 &&
      this.countdown.minutes === 0 &&
      this.countdown.seconds === 0
    );
  }
}
