import { Component, OnInit, OnChanges, SimpleChange, Input, Output, EventEmitter } from "@angular/core";
import { SafeResourceUrl, DomSanitizationService } from '@angular/platform-browser';

@Component({
	selector: 'doc-sidebar',
	templateUrl: './app/features/docSidebar/docsidebar.component.html',
	inputs: ['docLink', 'setDocSample']
})

export class DocSidebarComponent implements OnInit, OnChanges {
	@Input() docLink;
	@Output() setDocSample = new EventEmitter();
	public url: SafeResourceUrl;
	public open: boolean = false;
	
	constructor(public sanitizer: DomSanitizationService) {	}

	ngOnInit() {}

	ngOnChanges(changes) {
		if(changes.docLink.currentValue) {
			this.url = this.sanitizer.bypassSecurityTrustResourceUrl(changes.docLink.currentValue);
			this.open = true;
		}
	}

	close() {
		this.setDocSample.emit(null);
		this.open = false;
	}
}
