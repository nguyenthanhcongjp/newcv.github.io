const skills = [
	{
		nameSkill: 'HTML/CSS',
		contentSkill:'HTMLとCSSと組み合わせて、WEBページのデザインを変更できます。スマートフォン、ＰＣの両方に対応したWEBページを作成できます。',
		FontAwesome: 'fab fa-html5'
	},
	{
		nameSkill: 'JavaScript',
		contentSkill:'HTML、CSSを組み合わせてWebページの作成が可能です。',
		FontAwesome: 'fab fa-js'
	},
	{
		nameSkill: 'SQL',
		contentSkill:'基本文法と４大命令を使ったSQL文が作成可能です。指示書をもとにテーブル作成が可能です。',
		FontAwesome: 'fas fa-server'
	}
]
skills.forEach( value => {
    $('#accordion').append('<li><div class="link"><p style="padding-left: 10%; margin-top: -9%;">'+value.nameSkill+'</p><i style="padding-top: 6%;" class="fa fa-chevron-left"></i><i><i class="'+value.FontAwesome+'"></i></i></div><ul class="submenu"><p>'+value.contentSkill+'</p></ul></li>')
})
$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('#accordion'), false);
});

const myProject = [
	{
		nameProject: 'My Cv Project',
		contentProject: 'Link!',
		linkHref: 'https://nguyenthanhcongjp.github.io/newcv.github.io/'
	},
	{
		nameProject: 'Web PetShop Project',
		contentProject: 'Link!',
		linkHref: 'https://nguyenthanhcongjp.github.io/PetShop.github.io/'
	},
	{
		nameProject: 'Link My Github',
		contentProject: 'https://github.com/nguyenthanhcongjp',
		linkHref: 'https://github.com/nguyenthanhcongjp'
	},
];
myProject.forEach( value => {
    $('#myproject-items').append('<div style="padding: 5px 0px 5px 0px">'+value.nameProject+':<a href="'+value.linkHref+'"> '+value.contentProject+'</a></div>')
})