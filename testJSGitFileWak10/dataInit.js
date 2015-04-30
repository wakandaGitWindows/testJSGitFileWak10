for (var i = 0;i < 10000000 ; i++)
	{
	
		var emp = new ds.Person(
		{
			name:"name"+i
			
		});
		
		emp.save();	
	}
	
