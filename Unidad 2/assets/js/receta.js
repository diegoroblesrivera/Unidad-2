const settings = {
	async: true,
	crossDomain: true,
	url: 'https://all-in-one-recipe-api.p.rapidapi.com/details/10236',
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f46f0bb8c1mshb13ff6eae79a328p1ab2ebjsndddd61495b32',
		'X-RapidAPI-Host': 'all-in-one-recipe-api.p.rapidapi.com'
	}
};

$.ajax(settings).done(function (response) {
	console.log(response);
    console.log(response.recipe.data.Name);

    $("#reci").append(`<div class="wrapper">
    <div class="food">
      <div class="cover" style="background-image: url(https://1.bp.blogspot.com/-Y8H-0DWygcI/Uulo6hMuUNI/AAAAAAAALYA/xRbwoLi0qGc/s1600/unsplash_52d5bbef8a613_1.JPG)">
        <label>
          <i>
            <svg x="0px" y="0px" width="17px" height="17px"
  >
                <g>
                    <path d="M 7 1 C 7 1.5523 7.6716 2 8.5 2 C 9.3284 2 10 1.5523 10 1 C 10 0.4477 9.3284 0 8.5 0 C 7.6716 0 7 0.4477 7 1 ZM 7 2 C 7 2 0.6875 2.9375 0 7 C 0 7 -0.1875 9.6875 3 11 C 3 11 4.6875 10.9375 6 9 C 6 9 8.3125 12.8125 11 9 C 11 9 12.1875 10.875 14 11 C 14 11 16.75 10.0625 17 7 C 17 7 16.375 3 10.0625 1.9375 C 10.0625 1.9375 8.5 4.25 7 2 ZM 1 11 L 3 17 L 14 17 L 16 11 C 16 11 13.125 13 11 11 C 11 11 8.875 13.375 6 11 C 6 11 3 13.125 1 11 Z" fill="#ffffff"/>
                </g>
            </svg>
          </i>
          <font>${response.recipe.data.Name}</font>
        </label>
        <a href="#" class="download">
          <svg x="0px" y="0px" width="27px" height="22px"
  >
              <g>
                  <path d="M 12.5625 0 C 12.0102 0 11.5625 0.4477 11.5625 1 L 11.565 8.69 L 9.0625 8.6875 L 12 16 L 14 16 L 17.0625 8.6875 L 14.5 8.69 L 14.5 1 C 14.5 0.4477 14.0523 0 13.5 0 L 12.5625 0 ZM 1 19 L 1 14 L 0 14 L 0 19 C 0 20.6569 1.3431 22 3 22 L 24 22 C 25.6569 22 27 20.6569 27 19 L 27 14 L 26 14 L 26 19 C 26 20.1046 25.1046 21 24 21 L 3 21 C 1.8954 21 1 20.1046 1 19 Z" fill="#ffffff"/>
              </g>
          </svg>
        </a>
      </div>
      <div class="info">
        <a href="#" class="recipe">
          <i>
            <svg x="0px" y="0px" width="26px" height="28px"
  >
                <g>
                    <path d="M 8.5 20 L 8.5 21 L 17.5 21 L 17.5 20 L 8.5 20 ZM 8.5 16 L 8.5 17 L 17.5 17 L 17.5 16 L 8.5 16 ZM 8.5 12 L 8.5 13 L 17.5 13 L 17.5 12 L 8.5 12 ZM 20 0 C 19.4477 0 19 0.4477 19 1 L 19 6 C 19 6.5523 19.4477 7 20 7 C 20.5523 7 21 6.5523 21 6 L 21 1 C 21 0.4477 20.5523 0 20 0 ZM 13 0 C 12.4477 0 12 0.4477 12 1 L 12 6 C 12 6.5523 12.4477 7 13 7 C 13.5523 7 14 6.5523 14 6 L 14 1 C 14 0.4477 13.5523 0 13 0 ZM 6 0 C 5.4477 0 5 0.4477 5 1 L 5 6 C 5 6.5523 5.4477 7 6 7 C 6.5523 7 7 6.5523 7 6 L 7 1 C 7 0.4477 6.5523 0 6 0 ZM 15 4 L 18 4 L 18 3 L 15 3 L 15 4 ZM 8 4 L 11 4 L 11 3 L 8 3 L 8 4 ZM 3 4 L 4 4 L 4 3 L 3 3 C 1.3431 3 0 4.3431 0 6 L 0 25 C 0 26.6569 1.3431 28 3 28 L 23 28 C 24.6569 28 26 26.6569 26 25 L 26 6 C 26 4.3431 24.6569 3 23 3 L 22 3 L 22 4 L 23 4 C 24.1046 4 25 4.8954 25 6 L 25 25 C 25 26.1046 24.1046 27 23 27 L 3 27 C 1.8954 27 1 26.1046 1 25 L 1 6 C 1 4.8954 1.8954 4 3 4 Z" fill="#ffffff"/>
                </g>
            </svg>
          </i>
          <font>Details</font>
        </a>
        <div class="content">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td align="left" valign="middle" class="pad-right"><strong>Ingredients:</strong></td>
              <td align="left" valign="middle">sugar, egg whites, butter, salt cappuccino, cinnamon.</td>
              <td width="20" rowspan="2" class="border-right">&nbsp;</td>
              <td width="140" rowspan="2" align="center" valign="middle">
                <h1>9.75</h1>
                <span class="stars">
                  <em style="width: 91%"></em>
                </span><br />
                <small>(320 ratings)</small>
              </td>
            </tr>
           
          </table>
        </div>
      </div>
    </div>
  </div>`)
});