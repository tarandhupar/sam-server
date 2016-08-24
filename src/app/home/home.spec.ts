import 'reflect-metadata';
import 'zone.js/dist/zone';
import {it, describe, expect, beforeEach, inject} from '@angular/core/testing';
import {setBaseTestProviders} from '@angular/core/testing';
import {
    TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
    TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
} from '@angular/platform-browser-dynamic/testing';


import { Home } from './home.component';

setBaseTestProviders(
    TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
    TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
);



describe('Home Component', () => {
	var home;
  beforeEach(() => {
    home = new Home();
  });

  it('should have name property', () => {
    expect(home.name).toBe('John');
  });

  it('should say hello with name property', () => {
    expect(home.sayHello()).toBe('Hello John');
  });

});



 