(function(){
    $(function(){
        loadData();//함수 호출
        insertData();//함수 호출
    });
    
    var weatherData;//로드한 데이터를 insertData() 함수에서 접근해야 하는데 함수 안에서 선언된 데이터는  함수 밖에서 접근이 불가능하기 때문에 함수 밖에서 선언된 데이터에 다시 할당하여 데이터에 접근할 수 있게 만듬
    var imageArr = new Array(
                            "tornado.png",
                            "tropical_storm.png",
                            "hurricane.png",
                            "severe_thunderstorms.png",
                            "thunderstorms.png",
                            "mixed_rain_and_snow.png",
                            "mixed_rain_and_sleet.png",
                            "mixed_snow_and_sleet.png",
                            "freezing_drizzle.png",
                            "drizzle.png",
                            
                            "freezing_rain.png",
                            "showers.png",
                            "showers.png",
                            "snow_flurries.png",
                            "light_snow_showers.png",
                            "blowing_snow.png",
                            "snow.png",
                            "hail.png",
                            "sleet.png",
                            "dust.png",
                            
                            "foggy.png",
                            "haze.png",
                            "smoky.png",
                            "blustery.png",
                            "windy.png",
                            "cold.png",
                            "cloudy.png",
                            "mostly_cloudy.png",
                            "mostly_cloudy.png",
                            "partly_cloudy.png",
                            
                            "partly_cloudy.png",
                            "clear.png",
                            "sunny.png",
                            "fair.png",
                            "fair.png",
                            "mixed_rain_and_hail.png",
                            "hot.png",
                            "isolated_thunderstorms.png",
                            "scattered_thunderstorms.png",
                            "scattered_thunderstorms.png",
                            
                            "scattered_showers.png",
                            "heavy_snow.png",
                            "scattered_snow_showers.png",
                            "heavy_snow.png",
                            "partly_cloudy.png",
                            "thundershowers.png",
                            "snow_showers.png",
                            "isolated_thundershowers.png"                                                
                            );
                            
    var bgArr = new Array(
                               "rain.png",
                               "rain.png",
                               "rain.png",
                               "rain.png",
                               "rain.png",
                               "snow.png",
                               "rain.png",
                               "snow.png",
                               "snow.png",
                               "rain.png",
                               
                               
                               "rain.png",
                               "rain.png",
                               "rain.png",
                               "snow.png",
                               "snow.png",
                               "snow.png",
                               "snow.png",
                               "rain.png",
                               "snow.png",
                               "cloudy.png",
                               
                               "cloudy.png",
                               "cloudy.png",
                               "cloudy.png",
                               "cloudy.png",
                               "cloudy.png",
                               "cloudy.png",
                               "cloudy.png",
                               "cloudy.png",
                               "cloudy.png",
                               "cloudy.png",
                               
                               "cloudy.png",
                               "sunny.png",
                               "sunny.png",
                               "sunny.png",
                               "sunny.png",
                               "rain.png",
                               "sunny.png",
                               "rain.png",
                               "rain.png",
                               "rain.png",
                                                                            
                               "rain.png",
                               "snow.png",
                               "snow.png",
                               "snow.png",
                               "cloudy.png",
                               "rain.png",
                               "snow.png",
                               "rain.png"
                               );
    
    function loadData(){
        var query = 'select item from weather.forecast where woeid=1132599 and u="c"';
        var url = "http://query.yahooapis.com/v1/public/yql?q=" + query + "&format=json";
        
        $.ajaxSetup({
            async:false //데이터 로드를 동기식 처리 방식으로 변경. 데이터가 로드가 완료되기 전까지는 그 아래 구분이 실행되지 않도록 변경. 즉 데이터가 모두 불러오기 전까지는 insertData() 함수 구문이 실행되지 않도록 처리
        });
        
        $.getJSON(url, function(data){
            console.log(data);
            weatherData = data; //불러온 데이터를 외부함수에서 접근 가능하도록 미리 선언한 wertherData 변수에 할당
        });
    }
    
    function insertData(){
        var afterDayEl = $('#weather > .afterDay');
        var todayEl = $('#weather > .today');
        var todayTemp = todayEl.find('> .temp > .c');
        var todayDate = todayEl.find('> .date');
        var todayWeatherIcon = afterDayEl.find('> .weather_icon > img');
        var iconRoot = 'img/weather_icon/';//예제에 들어갈 아이콘 이미지의 폴더주소를 미리 변수 선언
        var bgRoot = 'img/weather_bg/';//배경이미지의 폴더 주소를 미리 변수 할당
        var secondHighTemp = afterDayEl.find('> .dateweek > .number > .high');
        var secondLowTemp = afterDayEl.find('> .dateweek > .number > .low');
        var secondDate = afterDayEl.find('> .dateweek > .datecontent');
        var thirdHighTemp = afterDayEl.find('> .dateweek > .number02 > .high');
        var thirdLowTemp = afterDayEl.find('> .dateweek > .number02 > .low');
        var thirdDate = afterDayEl.find('> .dateweek > .datecontent02');
        
        var condition = weatherData.query.results.channel.item.condition; //현재의 기상 정보가 포함된 태그 부분은 데이터에서 파싱하여 변수에 할당, 이때 파싱된 데이터의 타입은 객체임
        var forecast = weatherData.query.results.channel.item.forecast; // 앞으로 5일의 기상 정보가 담겨진 데이터 역시 파싱, 파싱한 데이터의 타입은 배열
        
        todayTemp.text(condition.temp);//오늘의 기온 수정
        todayDate.text(forecast[0].day + ' ,' + forecast[0].date);//오늘 날짜 수정
        
        /* 요일 한글로 바꾸기 */
        if ('Sun'===forecast[0].day) {
            forecast[0].day='일';
        } else if ('Mon'===forecast[0].day) {
            forecast[0].day='월';
        } else if ('Tue'===forecast[0].day) {
            forecast[0].day='화';
        } else if ('Wed'===forecast[0].day) {
            forecast[0].day='수';
        } else if ('Thu'===forecast[0].day) {
            forecast[0].day='목';
        } else if ('Fri'===forecast[0].day) {
            forecast[0].day='금';
        } else {
            forecast[0].day='토';
        }
        todayDate.text(forecast[0].day + ' ,' + forecast[0].date);    
        /* 요일 한글로 바꾸기 끝*/        
        
        var todayCode = parseInt(forecast[0].code);//오늘 기상 코드를 파싱하여 형태를 숫자로 변형
        var iconURL = iconRoot + imageArr[todayCode];//203번에서 가져운 기상 코드 번호를 imageArr 배열의 index번호로 활용하여 미리 지정해 놓은 이미지 주소를 가져옴
        todayWeatherIcon.attr('src', iconURL); //이미지 주소로 오늘의 기상 아이콘을 수정
        
        var bgURL = bgRoot + bgArr[todayCode];//203번에서 기상 코드 번호를 bgArr배열의 index롸 활용하여 미리 지정한 배경 이미지 주소를 가져와 변수 bgURL에 할당
        //$('#wrap').css('background-image','url(' + bgURL + ')');//207번에서 가져온  배경이미지 주소로 배경 이미지 수정
        
        secondHighTemp.text(forecast[1].high);//내일 최고기온을 수정
        secondLowTemp.text(forecast[1].low);//내일 최저기온을 수정
        secondDate.text(forecast[1].date);//내일 날짜를 수정
        
        thirdHighTemp.text(forecast[2].high);//모레 최고기온
        thirdLowTemp.text(forecast[2].low);//모레 최저기온
        thirdDate.text(forecast[2].date);//모레 날짜 수정
    }
    
})(jQuery);