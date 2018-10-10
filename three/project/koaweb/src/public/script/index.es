import '../style/index';
class PraiseButton {
    constructor() {}
    clickAction() {
		axios.get('/index/update').then(function(res) {
			console.log(res);
		}).catch(function(error) {
			console.log(error);
		})
    }
}
export default PraiseButton