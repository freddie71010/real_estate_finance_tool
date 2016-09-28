'use strict';
// Math.round(num * 100) / 100
$(document).ready(function(){

//created function to run dashboard input twice
	var dashboardInput = function(){
			myApp.dashboard.DashboardInput();
			myApp.dashboard.DashboardInput();
	};

//TESTING PURPOSES @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

	myApp.htmlGen.test();

//END TESTING PURPOSES @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@



// //Javascript Rental Rate Assumptions first insert row -----------------------
		// myApp.htmlGen.rentalRateAssumptions();

//Javascript Market Rental Rate Assumptions first insert row -------------------
		myApp.htmlGen.marketRentalAssumptions();

// ============================================================================================================
// Start of ALL calculations for dashboard
// ============================================================================================================

	// var RRAlist = []; //Rental Rate Assumptions list
	// var MRAlist = []; //Market Rental Assumptions list


//RENTAL RATE ASSUMPTIONS Table calculations=====================
	myApp.rra.RRAInput();

//MARKET RENTAL ASSUMPTIONS Table calculations===================
	myApp.mra.MRAInput();



// ============================================================================================================
//Rental Rate Form Dynamic Table
// ============================================================================================================
	// adds one row to table when the 'add' button is clicked
	$("#rental_rate_form").on('click', function(event) {
		event.preventDefault();
		$('#Rental_Rate_Assumptions').find('tbody')
			.append($("<tr class = 'rent_row'>")
			.append($("<td>").html("<input type='text' name='proj_rents' class='proj_rents' placeholder='Project Rents'></td>"))
			.append($("<td>").html("<input type='number' name='total_units' class='total_units' placeholder='Total Units'></td>"))
			.append($("<td class = 'total_sf'></td>").text("0"))
			.append($("<td>").html("<input type='number' name='avg_sf_per_unit' class='avg_sf_per_unit' placeholder='Avg SF/Unit'></td>"))
			.append($("<td class = 'rent_per_sf'></td>").text("$0.00"))
			.append($("<td>").html("<input type='number' name='rent_per_unit' class='rent_per_unit' placeholder='Rent Per Unit'></td>"))
			.append($('<td>').html("<a>[X]</a></td>"))
			)

	// function to delete all additionally added rows from the Rental Rate Assumptions table
		$('tr[class^="rent_row"] a').on('click', function(event) {
			$(this).parent().parent().remove();
			RRAInput();
				myApp.dashboard.DashboardInput();
		});
	//Runs input function inside

		$('.rent_row').on('input', myApp.rra.RRAInput);
		$('#dashboard').on('input', dashboardInput);

	}); //end addrow function




// ============================================================================================================
//MARKET RENTAL ASSUMPTIONS Dynamic Table
// ============================================================================================================
	// adds one row to table when the 'add' button is clicked
	$('#Sale_Year').on('focusout', function(event){
		var saleYear = parseInt($('#Sale_Year').val());
		for(var i=0;i<saleYear;++i){
			var mraCounter = $('#Market_Rental_Assumptions tbody tr').length+1;
			while(saleYear+1 < mraCounter){
				$('#Market_Rental_Assumptions tbody tr').last().remove();
				mraCounter = $('#Market_Rental_Assumptions tbody tr').length+1;
			};
			$('#Market_Rental_Assumptions').find('tbody')
				.append($("<tr class = 'year_row' id='year_row_"+mraCounter+"'>")
				.append($("<td class='mkt_rent_year'>Year "+mraCounter+"</td>"))
				.append($("<td></td>"))
				.append($("<td>").html("<input type='number' name='mkt_rent_revenue' class='mkt_rent_revenue' placeholder='Revenue (%)'></td>"))
				.append($("<td>").html("<input type='number' name='mkt_rent_expenses' class='mkt_rent_expenses' placeholder='Expenses (%)'></td>"))
				.append($("<td>").html("<input type='number' name='mkt_rent_vacancy' class='mkt_rent_vacancy' placeholder='Vacancy (%)'></td>"))
				.append($("<td>").html("<input type='number' name='mkt_rent_concessions' class='mkt_rent_concessions' placeholder='Concessions (%)'></td>"))
				.append($("<td>").html("<input type='number' name='mkt_rent_credit_loss' class='mkt_rent_credit_loss' placeholder='Credit Loss (%)'></td>"))
				)
		};
	}); //end addrow function

// ============================================================================================================
	$('.rent_row').on('input', myApp.rra.RRAInput);
	$('#dashboard').on('input', dashboardInput);





}); //end of doc
