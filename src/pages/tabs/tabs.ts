

import { Component } from '@angular/core';

import { SettingsPage } from '../settings/settings';
import { ExplorePage } from '../explore/explore';
import { VideoPage } from '../video/video';
import { ActivityPage } from '../activity/activity';
import { HomePage } from '../home/home';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ExplorePage;
  tab3Root = VideoPage;
  tab4Root = ActivityPage;
  tab5Root = SettingsPage;

  constructor() {

  }
}
