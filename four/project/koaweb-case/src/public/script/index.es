import css from '../css/index.css'

class PraiseButton {
	constructor() {}

	clickAction() {
		axios.get('/index/updata')
			.then(function(response) {})
			.catch(function(error) {
				console.log(error);
			});
	}

}
class Thumb extends PraiseButton {
	constructor() {
		super();
	}
}

class Star extends PraiseButton {
	constructor() {
		super();
	}
}
export {
	Thumb,
	Star
}
// let f= new Thumb(0,$('#thumb'));
// f.clickAction();