const emp_attendance = [
	{
	emp_id : 1,
	attendance : [
			{ 
				'date': '01-01-2022', 
				'start_time' : '7:30', 
				'end_time' : '19:30',
				'total':'9 hours'
			},
			{ 
				'date': '01-02-2022', 
				'start_time' : '7:30', 
				'end_time' : '19:30',
				'total':'9 hours'
			},
			{ 
				'date': '01-03-2022', 
				'start_time' : '7:30', 
				'end_time' : '19:30',
				'total':'9 hours'
			},
			{ 
				'date': '01-04-2022', 
				'start_time' : '7:30', 
				'end_time' : '19:30',
				'total':'9 hours'
			},
			{ 
				'date': '01-05-2022', 
				'start_time' : '7:30', 
				'end_time' : '19:30',
				'total':'9 hours'
			}
		]
	},
	
];
export function getAttendance() {
    return emp_attendance;
}