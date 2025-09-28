### Make object subscribe to events that happen to other objects

```ts
// Without observer
class UserAccount {
	constructor(public name: string) {}
}

class VideoChannel {
	#subscribers: UserAccount[] = [];

	upload(video: string) {
		// Upload video ...
		// Now what? Loop through users and notify somehow ?
		console.log(`Video "${video}" uploaded, but no notification system ...`);
	}
}
```

```ts
// With observer
interface Subscriber {
	update(videoTitle: string): void;
}

class BetterVideoChannel {
	#subscribers: Subscriber[] = [];

	subscribe(subscriber: Subscriber) {
		this.#subscribers = [...this.#subscribers, subscriber];
	}

	unsubscribe(subscriber: Subscriber) {
		this.#subscribers = this.#subscribers.filter((sub) => sub == subscriber);
	}

	#notify(videoTitle: string) {
		this.#subscribers.forEach((sub) => {
			sub.update(videoTitle);
		});
	}

	upload(title: string) {
		// Upload video ...
		console.log(`Video uploaded: ${title}`);
		this.#notify(title);
	}
}
```
