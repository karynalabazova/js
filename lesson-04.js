var handbag = {
	keys: "house keys",
	purse: "money",
	phone: "iphone",
	makeup: "lipstick",
	takeOut: function (item){
		delete handbag[item]
	},
	putInside: function (item, value){
		handbag[item] = value
	},
}
handbag.takeOut("purse")
handbag.putInside("money",500)

var LibraryBook = function ( _title = "Без названия", _year = "нет данных", _author = "нет данных" ) {
        var title = _title
        var year = _year
        var author = _author
        var readerName = null
        var readerData = null
        function giveTheBook ( client, data = new Date() ) {
                readerName = client
                readerData = data
        }
        this.getBookInfo = function () {
                var text = readerName ? "выдана на руки" : "есть в наличии"
                console.info ( `${author}, ${title} (${year}): ${text}` )
        }
        this.getTheBook = function ( client, data ) {
                if ( readerName ) {
                        this.getBookInfo ()
                        return null
                } else {
                        giveTheBook ( client, data )
                        return {
                                title: title,
                                year: year,
                                author: author
                        }
                }
        }
        this.returnBook = function () {
                readerName = null
                readerData = null
        }
}
var books = []
books [0] = new LibraryBook ( "Кратчайшая история времени", "2005", "Стивен Хокинг" )
books [0].getTheBook( "Карина Лабазова", new Date ( 2018, 12, 04 ) )
