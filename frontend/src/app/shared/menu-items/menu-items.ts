import { Injectable } from '@angular/core';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  isExample: boolean;
}

const MENUITEMS = [
  { state: 'products', name: 'Products', type: 'link', icon: 'call_to_action', isExample: false },
  { state: 'dashboard', name: 'Dashboard', type: 'link', icon: 'av_timer' , isExample: true },
  { state: 'button', type: 'link', name: 'Buttons', icon: 'crop_7_5', isExample: true },
  { state: 'grid', type: 'link', name: 'Grid List', icon: 'view_comfy' , isExample: true },
  { state: 'lists', type: 'link', name: 'Lists', icon: 'view_list' , isExample: true },
  { state: 'menu', type: 'link', name: 'Menu', icon: 'view_headline' , isExample: true },
  { state: 'tabs', type: 'link', name: 'Tabs', icon: 'tab' , isExample: true },
  { state: 'stepper', type: 'link', name: 'Stepper', icon: 'web', isExample: true },
  {
    state: 'expansion',
    type: 'link',
    name: 'Expansion Panel',
    icon: 'vertical_align_center',
    isExample: true
  },
  { state: 'chips', type: 'link', name: 'Chips', icon: 'vignette' , isExample: true },
  { state: 'toolbar', type: 'link', name: 'Toolbar', icon: 'voicemail' , isExample: true },
  {
    state: 'progress-snipper',
    type: 'link',
    name: 'Progress snipper',
    icon: 'border_horizontal',
    isExample: true
  },
  {
    state: 'progress',
    type: 'link',
    name: 'Progress Bar',
    icon: 'blur_circular',
    isExample: true
  },
  {
    state: 'dialog',
    type: 'link',
    name: 'Dialog',
    icon: 'assignment_turned_in',
    isExample: true
  },
  { state: 'tooltip', type: 'link', name: 'Tooltip', icon: 'assistant' , isExample: true },
  { state: 'snackbar', type: 'link', name: 'Snackbar', icon: 'adb' , isExample: true },
  { state: 'slider', type: 'link', name: 'Slider', icon: 'developer_mode' , isExample: true },
  {
    state: 'slide-toggle',
    type: 'link',
    name: 'Slide Toggle',
    icon: 'all_inclusive',
    isExample: true
  },
];

@Injectable()
export class MenuItems {
  getMenuitem(): Menu[] {
    return MENUITEMS;
  }
}
