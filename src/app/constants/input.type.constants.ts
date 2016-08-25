import { Injectable } from '@angular/core';
declare var label: any;
declare var alert: any;

@Injectable()
export class InputTypeConstants {
	getConstants(){
		return {label,alert};
	}
}
