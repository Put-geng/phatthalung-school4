const buildings = {
    "building-1": {
        "ห้อง 122": [
            { day: "จันทร์", start: "10:10", end: "11:00", class: "ม.1.1", subject: "ภาษาไทย"},
            { day: "จันทร์", start: "11:50", end: "13:30", class: "ม.1.1", subject: "อังกฤษพื้นฐาน"},
            { day: "อังคาร", start: "10:10", end: "11:00", class: "ม.1.1", subject: "คณิตศาสตร์" },
            { day: "อังคาร", start: "11:50", end: "13:30", class: "ม.1.1", subject: "คณิตศาสตร์"},
            { day: "อังคาร", start: "11:50", end: "13:30", class: "ม.1.1", subject: "สังคมศึกษา" },
            { day: "พุธ", start: "07:30", end: "08:30", class: "ม.1.1", subject: "พบครูที่ปรึกษา"},
            { day: "พุธ", start: "08:30", end: "10:10", class: "ม.1.1", subject: "คณิตศาสตร์"},
            { day: "พุธ", start: "10:10", end: "11:00", class: "ม.1.1", subject: "สุขศึกษา"},
            { day: "พุธ", start: "11:50", end: "13:30", class: "ม.1.1", subject: "ภาษาไทย"},
            { day: "พฤหัสบดี", start: "08:30", end: "10:10", class: "ม.1.1", subject: "คณิตศาสตร์"},
            { day: "พฤหัสบดี", start: "10:10", end: "11:00", class: "ม.1.1", subject: "อังกฤษพื้นฐาน"},
            { day: "พฤหัสบดี", start: "12:40", end: "13:30", class: "ม.1.1", subject: "วิทยาศาสตร์"},
            { day: "ศุกร์", start: "08:30", end: "10:10", class: "ม.1.1", subject: "อังกฤษสื่อสาร"},
            { day: "ศุกร์", start: "10:10", end: "11:00", class: "ม.1.1", subject: "สังคมศึกษา"},
            { day: "ศุกร์", start: "11:50", end: "12:40", class: "ม.1.1", subject: "ประวัติศาสตร์"},
            { day: "ศุกร์", start: "14:20", end: "15:10", class: "ม.1.1", subject: "แนะแนว"}
        ],
        "ห้อง 123": [
            { day: "จันทร์", start: "08:30", end: "10:10", class: "ม.1.2", subject: "สังคมศึกษา" },
            { day: "จันทร์", start: "10:10", end: "11:00", class: "ม.1.2", subject: "ภาษาไทย" },
            { day: "จันทร์", start: "11:50", end: "12:40", class: "ม.1.2", subject: "สุขศึกษา"},
            { day: "จันทร์", start: "12:40", end: "13:30", class: "ม.1.2", subject: "วิทยาศาสตร์"},
            { day: "อังคาร", start: "10:10", end: "11:00", class: "ม.1.2", subject: "ประวัติศาสตร์"},
            { day: "อังคาร", start: "11:50", end: "13:30", class: "ม.1.2", subject: "คณิตศาสตร์"},
            { day: "อังคาร", start: "13:30", end: "15:10", class: "ม.1.2", subject: "อังกฤษพื้นฐาน"},
            { day: "พุธ", start: "07:30", end: "08:30", class: "ม.1.2", subject: "พบครูที่ปรึกษา"},
            { day: "พุธ", start: "08:30", end: "10:10", class: "ม.1.2", subject: "คณิตศาสตร์"},
            { day: "พุธ", start: "10:10", end: "11:00", class: "ม.1.2", subject: "สังคมศึกษา"},
            { day: "พุธ", start: "11:50", end: "13:30", class: "ม.1.2", subject: "ภาษาไทย"},
            { day: "พฤหัสบดี", start: "08:30", end: "09:20", class: "ม.1.2", subject: "อังกฤษพื้นฐาน"},
            { day: "ศุกร์", start: "09:20", end: "10:10", class: "ม.1.2", subject: "คณิตศาสตร์"},
            { day: "ศุกร์", start: "12:40", end: "13:30", class: "ม.1.2", subject: "แนะแนว"},
            { day: "ศุกร์", start: "13:30", end: "15:10", class: "ม.1.2", subject: "อังกฤษสื่อสาร"}
        ],

        "ห้อง 124": [
            { day: "จันทร์", start: "08:30", end: "09:20", class: "ม.1.3", subject: "วิทยาศาสตร์" },
            { day: "จันทร์", start: "09:20", end: "10:10", class: "ม.1.3", subject: "สุขศึกษา" },
            { day: "จันทร์", start: "10:10", end: "11:00", class: "ม.1.3", subject: "คณิตศาสตร์"},
            { day: "จันทร์", start: "11:50", end: "13:30", class: "ม.1.3", subject: "อังกฤษสื่อสาร"},
            { day: "อังคาร", start: "08:30", end: "09:20", class: "ม.1.3", subject: "อังกฤษพื้นฐาน"},
            { day: "อังคาร", start: "09:20", end: "11:00", class: "ม.1.3", subject: "คณิตศาสตร์"},
            { day: "อังคาร", start: "11:50", end: "12:40", class: "ม.1.3", subject: "แนะแนว"},
            { day: "อังคาร", start: "13:30", end: "15:10", class: "ม.1.3", subject: "สังคมศึกษา"},
            { day: "พุธ", start: "07:30", end: "08:30", class: "ม.1.3", subject: "พบครูที่ปรึกษา"},
            { day: "พุธ", start: "08:30", end: "09:20", class: "ม.1.3", subject: "ประวัติศาสตร์"},
            { day: "พุธ", start: "09:20", end: "11:00", class: "ม.1.3", subject: "ภาษาไทย"},
            { day: "พุธ", start: "11:50", end: "13:30", class: "ม.1.3", subject: "คณิตศาสตร์"},
            { day: "พฤหัสบดี", start: "08:30", end: "09:20", class: "ม.1.3", subject: "สังคมศึกษา"},
            { day: "พฤหัสบดี", start: "09:20", end: "11:00", class: "ม.1.3", subject: "อังกฤษพื้นฐาน"},
            { day: "ศุกร์", start: "12:40", end: "13:30", class: "ม.1.3", subject: "ภาษาไทย"}
        ],

        "ห้อง 125": [
            { day: "จันทร์", start: "12:40", end: "13:30", class: "ม.1.4", subject: "ภาษาไทย" },
            { day: "อังคาร", start: "08:30", end: "09:20", class: "ม.1.4", subject: "คณิตศาสตร์" },
            { day: "อังคาร", start: "09:20", end: "10:10", class: "ม.1.4", subject: "สุขศึกษา"},
            { day: "อังคาร", start: "12:40", end: "13:30", class: "ม.1.4", subject: "แนะแนว"},
            { day: "อังคาร", start: "13:30", end: "15:10", class: "ม.1.4", subject: "อังกฤษสื่อสาร"},
            { day: "พุธ", start: "07:30", end: "08:30", class: "ม.1.4", subject: "พบครูที่ปรึกษา"},
            { day: "พุธ", start: "11:50", end: "13:30", class: "ม.1.4", subject: "สังคมศึกษา"},
            { day: "พฤหัสบดี", start: "09:20", end: "11:00", class: "ม.1.4", subject: "คณิตศาสตร์"},
            { day: "พฤหัสบดี", start: "11:50", end: "12:40", class: "ม.1.4", subject: "วิทยศาสตร์"},
            { day: "พฤหัสบดี", start: "12:40", end: "13:30", class: "ม.1.4", subject: "สังคมศึกษา"},
            { day: "พฤหัสบดี", start: "13:30", end: "15:10", class: "ม.1.4", subject: "อังกฤษพื้นฐาน"},
            { day: "ศุกร์", start: "08:30", end: "09:20", class: "ม.1.4", subject: "อังกฤษพื้นฐาน"},
            { day: "ศุกร์", start: "09:20", end: "11:00", class: "ม.1.4", subject: "ภาษาไทย"},
            { day: "ศุกร์", start: "11:50", end: "13:30", class: "ม.1.4", subject: "คณิตศาสตร์"}
        ],

        "ห้อง 131": [
            { day: "จันทร์", start: "08:30", end: "10:10", class: "ม.1.11", subject: "อังกฤษสื่อสาร"},
            { day: "จันทร์", start: "10:10", end: "11:00", class: "ม.1.11", subject: "ประวัติศาสตร์"},
            { day: "จันทร์", start: "11:50", end: "12:40", class: "ม.1.11", subject: "วิทยาศาสตร์"},
            { day: "จันทร์", start: "12:40", end: "13:30", class: "ม.1.11", subject: "สังคมศึกษา"},
            { day: "จันทร์", start: "13:30", end: "14:20", class: "ม.1.11", subject: "คณิตศาสตร์"},
            { day: "จันทร์", start: "14:20", end: "15:10", class: "ม.1.11", subject: "ภาษาไทย"},
            { day: "อังคาร", start: "07:30", end: "09:20", class: "ม.1.11", subject: "วิทยาศาสตร์"},
            { day: "อังคาร", start: "11:50", end: "13:30", class: "ม.1.11", subject: "ภาษาไทย"},
            { day: "อังคาร", start: "13:30", end: "14:20", class: "ม.1.11", subject: "สุขศึกษา"},
            { day: "พุธ", start: "07:30", end: "08:30", class: "ม.1.11", subject: "พบครูที่ปรึกษา"},
            { day: "พุธ", start: "08:30", end: "10:10", class: "ม.1.11", subject: "คณิตศาสตร์"},
            { day: "พุธ", start: "10:10", end: "11:00", class: "ม.1.11", subject: "อังกฤษพื้นฐาน"},
            { day: "พุธ", start: "11:50", end: "13:30", class: "ม.1.11", subject: "อังกฤษสื่อสาร"},
            { day: "ศุกร์", start: "08:30", end: "09:20", class: "ม.1.11", subject: "แนะแนว"},
            { day: "ศุกร์", start: "09:20", end: "11:00", class: "ม.1.11", subject: "อังกฤษพื้นฐาน"},
            { day: "ศุกร์", start: "11:50", end: "13:30", class: "ม.1.11", subject: "คณิตศาสตร์"},
            { day: "ศุกร์", start: "13:30", end: "15:10", class: "ม.1.11", subject: "สังคมศึกษา"}
        ],

        "ห้อง 132": [
            { day: "จันทร์", start: "08:30", end: "09:20", class: "ม.1.5", subject: "อังกฤษพื้นฐาน" },
            { day: "จันทร์", start: "09:20", end: "10:10", class: "ม.1.5", subject: "วิทยาศาสตร์" },
            { day: "จันทร์", start: "12:40", end: "13:30", class: "ม.1.5", subject: "สุขศึกษา"},
            { day: "จันทร์", start: "13:30", end: "15:10", class: "ม.1.5", subject: "สังคมศึกษา"},
            { day: "อังคาร", start: "08:30", end: "10:10", class: "ม.1.5", subject: "คณิตศาสตร์"},
            { day: "อังคาร", start: "12:40", end: "13:30", class: "ม.1.5", subject: "ภาษาไทย"},
            { day: "พุธ", start: "07:30", end: "08:30", class: "ม.1.5", subject: "พบครูที่ปรึกษา"},
            { day: "พุธ", start: "08:30", end: "10:10", class: "ม.1.5", subject: "ภาษาไทย"},
            { day: "พุธ", start: "10:10", end: "11:00", class: "ม.1.5", subject: "แนะแนว"},
            { day: "พุธ", start: "11:50", end: "13:30", class: "ม.1.5", subject: "อังกฤษพื้นฐาน"},
            { day: "พฤหัสบดี", start: "10:10", end: "11:00", class: "ม.1.5", subject: "สังคมศึกษา"},
            { day: "พฤหัสบดี", start: "11:50", end: "13:30", class: "ม.1.5", subject: "คณิตศาสตร์"},
            { day: "พฤหัสบดี", start: "13:30", end: "15:10", class: "ม.1.5", subject: "อังกฤษสื่อสาร"},
            { day: "ศุกร์", start: "08:30", end: "09:20", class: "ม.1.5", subject: "คณิตศาสตร์"},
            { day: "ศุกร์", start: "13:30", end: "14:20", class: "ม.1.5", subject: "ประวัติศาสตร์"}
        ],

        "ห้อง 133": [
            { day: "จันทร์", start: "08:30", end: "10:10", class: "ม.1.6", subject: "ภาษาไทย"},
            { day: "จันทร์", start: "12:40", end: "13:30", class: "ม.1.6", subject: "สังคมศึกษา"},
            { day: "จันทร์", start: "13:30", end: "14:20", class: "ม.1.6", subject: "วิทยาศาสตร์"},
            { day: "จันทร์", start: "14:20", end: "15:10", class: "ม.1.6", subject: "แนะแนว"},
            { day: "อังคาร", start: "08:30", end: "10:10", class: "ม.1.6", subject: "สังคมศึกษา"},
            { day: "อังคาร", start: "12:40", end: "13:30", class: "ม.1.6", subject: "คณิตศาสตร์"},
            { day: "อังคาร", start: "13:30", end: "14:20", class: "ม.1.6", subject: "อังกฤษพื้นฐาน"},
            { day: "พุธ", start: "07:30", end: "08:30", class: "ม.1.6", subject: "พบครูที่ปรึกษา"},
            { day: "พุธ", start: "08:30", end: "10:10", class: "ม.1.6", subject: "อังกฤษสื่อสาร"},
            { day: "พุธ", start: "10:10", end: "11:00", class: "ม.1.6", subject: "ภาษาไทย"},
            { day: "พฤหัสบดี", start: "08:30", end: "09:20", class: "ม.1.6", subject: "สุขศึกษา"},
            { day: "พฤหัสบดี", start: "09:20", end: "11:00", class: "ม.1.6", subject: "คณิตศาสตร์"},
            { day: "พฤหัสบดี", start: "11:50", end: "13:30", class: "ม.1.6", subject: "อังกฤษพื้นฐาน"},
            { day: "ศุกร์", start: "08:30", end: "10:10", class: "ม.1.6", subject: "คณิตศาสตร์"}
        ],

        "ห้อง 134": [
            { day: "จันทร์", start: "08:30", end: "10:10", class: "ม.1.7", subject: "คณิตศาสตร์"},
            { day: "จันทร์", start: "12:40", end: "13:30", class: "ม.1.7", subject: "ภาษาไทย"},
            { day: "อังคาร", start: "08:30", end: "10:10", class: "ม.1.7", subject: "คณิตศาสตร์"},
            { day: "อังคาร", start: "12:40", end: "13:30", class: "ม.1.7", subject: "สังคมศึกษา"},
            { day: "อังคาร", start: "13:30", end: "15:10", class: "ม.1.7", subject: "อังกฤษสื่อสาร"},
            { day: "พุธ", start: "07:30", end: "08:30", class: "ม.1.7", subject: "พบครูที่ปรึกษา"},
            { day: "พุธ", start: "10:10", end: "11:00", class: "ม.1.7", subject: "ประวัติศาสตร์"},
            { day: "พุธ", start: "11:50", end: "13:30", class: "ม.1.7", subject: "อังกฤษพื้นฐาน"},
            { day: "พฤหัสบดี", start: "08:30", end: "10:10", class: "ม.1.7", subject: "ภาษาไทย"},
            { day: "พฤหัสบดี", start: "11:50", end: "12:40", class: "ม.1.7", subject: "สุขศึกษา"},
            { day: "พฤหัสบดี", start: "12:40", end: "14:20", class: "ม.1.7", subject: "สังคมศึกษา"},
            { day: "พฤหัสบดี", start: "14:20", end: "15:10", class: "ม.1.7", subject: "วิทยาศาสตร์"},
            { day: "ศุกร์", start: "08:30", end: "09:20", class: "ม.1.7", subject: "คณิตศาสตร์"},
            { day: "ศุกร์", start: "13:30", end: "14:20", class: "ม.1.7", subject: "แนะแนว"},
            { day: "ศุกร์", start: "14:20", end: "15:10", class: "ม.1.7", subject: "อังกฤษพื้นฐาน"}
        ],

        "ห้อง 135": [
            { day: "จันทร์", start: "08:30", end: "10:10", class: "ม.1.8", subject: "คณิตศาสตร์"},
            { day: "จันทร์", start: "12:40", end: "13:30", class: "ม.1.8", subject: "แนะแนว"},
            { day: "จันทร์", start: "13:30", end: "14:20", class: "ม.1.8", subject: "ภาษาไทย"},
            { day: "อังคาร", start: "08:30", end: "10:10", class: "ม.1.8", subject: "สังคมศึกษา"},
            { day: "อังคาร", start: "14:20", end: "15:10", class: "ม.1.8", subject: "อังกฤษพื้นฐาน"},
            { day: "พุธ", start: "07:30", end: "08:30", class: "ม.1.8", subject: "พบครูที่ปรึกษา"},
            { day: "พุธ", start: "08:30", end: "10:10", class: "ม.1.8", subject: "อังกฤษพื้นฐาน"},
            { day: "พุธ", start: "10:10", end: "11:00", class: "ม.1.8", subject: "สุขศึกษา"},
            { day: "พุธ", start: "11:50", end: "13:30", class: "ม.1.8", subject: "คณิตศาสตร์"},
            { day: "พฤหัสบดี", start: "08:30", end: "10:10", class: "ม.1.8", subject: "ภาษาไทย"},
            { day: "พฤหัสบดี", start: "10:10", end: "11:00", class: "ม.1.8", subject: "วิทยาศาสตร์"},
            { day: "ศุกร์", start: "10:10", end: "11:00", class: "ม.1.8", subject: "สังคมศึกษา"},
            { day: "ศุกร์", start: "11:50", end: "12:40", class: "ม.1.8", subject: "คณิตศาสตร์"},
            { day: "ศุกร์", start: "12:40", end: "14:20", class: "ม.1.8", subject: "อังกฤษสื่อสาร"},
            { day: "ศุกร์", start: "14:20", end: "15:10", class: "ม.1.8", subject: "ประวัติศาสตร์"}
        ]
    },
      
    "building-2": {
        "ห้อง 222": [
		    { day: "จันทร์", start: "08:30", end: "10:10", class: "ม.2.10", subject: "ภาษาไทย"},
		    { day: "จันทร์", start: "10:10", end: "11:00", class: "ม.2.10", subject: "อังกฤษพื้นฐาน"},
		    { day: "อังคาร", start: "08:30", end: "09:20", class: "ม.2.10", subject: "วิทยาศาสตร์"},
		    { day: "อังคาร", start: "09:20", end: "11:00", class: "ม.2.10", subject: "อังกฤษพื้นฐาน"},
		    { day: "พุธ", start: "08:30", end: "10:10", class: "ม.2.10", subject: "วิทยาศาสตร์"},
		    { day: "พุธ", start: "10:10", end: "11:00", class: "ม.2.10", subject: "คณิตศาสตร์"},
		    { day: "พุธ", start: "11:50", end: "12:40", class: "ม.2.10", subject: "สังคมศึกษา"},
		    { day: "พุธ", start: "12:40", end: "13:30", class: "ม.2.10", subject: "สุขศึกษา"},
		    { day: "พุธ", start: "13:30", end: "15:10", class: "ม.2.10", subject: "วิทยาศาสตร์"},
		    { day: "พฤหัสบดี", start: "08:30", end: "09:20", class: "ม.2.10", subject: "ภาษาไทย"},
		    { day: "พฤหัสบดี", start: "09:20", end: "11:00", class: "ม.2.10", subject: "อังกฤษสื่อสาร"},
		    { day: "พฤหัสบดี", start: "12:40", end: "14:20", class: "ม.2.10", subject: "คณิตศาสตร์"},
		    { day: "พฤหัสบดี", start: "14:20", end: "15:10", class: "ม.2.10", subject: "ประวัติศาสตร์"},
		    { day: "ศุกร์", start: "08:30", end: "10:10", class: "ม.2.10", subject: "สังคมศึกษา"},
		    { day: "ศุกร์", start: "10:10", end: "11:00", class: "ม.2.10", subject: "แนะแนว"},
		    { day: "ศุกร์", start: "11:50", end: "13:30", class: "ม.2.10", subject: "อังกฤษสื่อสาร"},
		    { day: "ศุกร์", start: "13:30", end: "15:10", class: "ม.2.10", subject: "คณิตศาสตร์"}
		],

        "ห้อง 223": [
		    { day: "จันทร์", start: "08:30", end: "10:10", class: "ม.2.9", subject: "อังกฤษพื้นฐาน"},
		    { day: "จันทร์", start: "10:10", end: "11:00", class: "ม.2.9", subject: "สุขศึกษา"},
		    { day: "จันทร์", start: "11:50", end: "13:30", class: "ม.2.9", subject: "อังกฤษสื่อสาร"},
		    { day: "อังคาร", start: "08:30", end: "10:10", class: "ม.2.9", subject: "วิทยาศาสตร์"},
		    { day: "อังคาร", start: "10:10", end: "11:00", class: "ม.2.9", subject: "ภาษาไทย"},
		    { day: "อังคาร", start: "11:50", end: "12:40", class: "ม.2.9", subject: "ประวัติศาสตร์"},
		    { day: "อังคาร", start: "12:40", end: "13:30", class: "ม.2.9", subject: "คณิตศาสตร์"},
		    { day: "อังคาร", start: "13:30", end: "15:10", class: "ม.2.9", subject: "อังกฤษสื่อสาร"},
		    { day: "พุธ", start: "08:30", end: "10:10", class: "ม.2.9", subject: "คณิตศาสตร์"},
		    { day: "พุธ", start: "10:10", end: "11:00", class: "ม.2.9", subject: "สังคมศึกษา"},
		    { day: "พุธ", start: "11:50", end: "13:30", class: "ม.2.9", subject: "ภาษาไทย"},
		    { day: "พุธ", start: "13:30", end: "15:10", class: "ม.2.9", subject: "วิทยาศาสตร์"},
		    { day: "พฤหัสบดี", start: "10:10", end: "11:00", class: "ม.2.9", subject: "วิทยาศาสตร์"},
		    { day: "พฤหัสบดี", start: "11:50", end: "12:40", class: "ม.2.9", subject: "อังกฤษพื้นฐาน"},
		    { day: "พฤหัสบดี", start: "13:30", end: "15:10", class: "ม.2.9", subject: "สังคมศึกษา"},
		    { day: "ศุกร์", start: "08:30", end: "09:20", class: "ม.2.9", subject: "แนะแนว"},
		    { day: "ศุกร์", start: "09:20", end: "11:00", class: "ม.2.9", subject: "คณิตศาสตร์"}
		],

        "ห้อง 224": [
		    { day: "จันทร์", start: "08:30", end: "10:10", class: "ม.2.11", subject: "ภาษาไทย"},
		    { day: "จันทร์", start: "11:50", end: "13:30", class: "ม.2.11", subject: "คณิตศาสตร์"},
		    { day: "อังคาร", start: "08:30", end: "10:10", class: "ม.2.11", subject: "วิทยาศาสตร์"},
		    { day: "อังคาร", start: "10:10", end: "11:00", class: "ม.2.11", subject: "คณิตศาสตร์"},
		    { day: "พุธ", start: "08:30", end: "09:20", class: "ม.2.11", subject: "ภาษาไทย"},
		    { day: "พุธ", start: "09:20", end: "11:00", class: "ม.2.11", subject: "อังกฤษสื่อสาร"},
		    { day: "พุธ", start: "11:50", end: "12:40", class: "ม.2.11", subject: "อังกฤษพื้นฐาน"},
		    { day: "พุธ", start: "12:40", end: "13:30", class: "ม.2.11", subject: "ประวัติศาสตร์"},
		    { day: "พุธ", start: "13:30", end: "15:10", class: "ม.2.11", subject: "วิทยาศาสตร์"},
		    { day: "พฤหัสบดี", start: "07:30", end: "08:30", class: "ม.2.11", subject: "แนะแนว"},
		    { day: "พฤหัสบดี", start: "08:30", end: "10:10", class: "ม.2.11", subject: "คณิตศาสตร์"},
		    { day: "พฤหัสบดี", start: "10:10", end: "11:00", class: "ม.2.11", subject: "วิทยาศาสตร์"},
		    { day: "พฤหัสบดี", start: "13:30", end: "15:10", class: "ม.2.11", subject: "สังคมศึกษา"},
		    { day: "ศุกร์", start: "08:30", end: "10:10", class: "ม.2.11", subject: "อังกฤษพื้นฐาน"},
		    { day: "ศุกร์", start: "10:10", end: "11:00", class: "ม.2.11", subject: "สังคมศึกษา"},
		    { day: "ศุกร์", start: "11:50", end: "13:30", class: "ม.2.11", subject: "อังกฤษสื่อสาร"}
		],

        "ห้อง 237": [
            { day: "จันทร์", start: "08:30", end: "10:10", class: "ม.1.9", subject: "คณิตศาสตร์" },
            { day: "จันทร์", start: "10:10", end: "11:00", class: "ม.1.9", subject: "วิทยาศาสตร์" },
            { day: "จันทร์", start: "11:50", end: "13:30", class: "ม.1.9", subject: "อังกฤษสื่อสาร"},
            { day: "จันทร์", start: "13:30", end: "15:10", class: "ม.1.9", subject: "วิทยาศาสตร์"},
            { day: "อังคาร", start: "08:30", end: "09:20", class: "ม.1.9", subject: "ภาษาไทย"},
            { day: "อังคาร", start: "09:20", end: "11:00", class: "ม.1.9", subject: "อังกฤษพื้นฐาน"},
            { day: "อังคาร", start: "13:30", end: "14:20", class: "ม.1.9", subject: "แนะแนว"},
            { day: "พุธ", start: "07:30", end: "08:30", class: "ม.1.9", subject: "พบครูที่ปรึกษา"},
            { day: "พุธ", start: "10:10", end: "11:00", class: "ม.1.9", subject: "สังคมศึกษา"},
            { day: "พุธ", start: "11:50", end: "13:30", class: "ม.1.9", subject: "อังกฤษสื่อสาร"},
            { day: "พฤหัสบดี", start: "08:30", end: "09:20", class: "ม.1.9", subject: "ประวัติศาสตร์"},
            { day: "พฤหัสบดี", start: "09:20", end: "11:00", class: "ม.1.9", subject: "ภาษาไทย"},
            { day: "พฤหัสบดี", start: "11:50", end: "13:30", class: "ม.1.9", subject: "คณิตศาสตร์"},
            { day: "ศุกร์", start: "08:30", end: "10:10", class: "ม.1.9", subject: "สังคมศึกษา"},
            { day: "ศุกร์", start: "10:10", end: "11:00", class: "ม.1.9", subject: "คณิตศาสตร์"},
            { day: "ศุกร์", start: "11:50", end: "12:40", class: "ม.1.9", subject: "อังกฤษพื้นฐาน"},
            { day: "ศุกร์", start: "12:40", end: "13:30", class: "ม.1.9", subject: "สุขศึกษา"}
        ],
          
        "ห้อง 238": [
            { day: "จันทร์", start: "08:30", end: "10:10", class: "ม.1.10", subject: "คณิตศาสตร์" },
            { day: "จันทร์", start: "10:10", end: "11:00", class: "ม.1.10", subject: "สังคมศึกษา" },
            { day: "จันทร์", start: "11:50", end: "12:40", class: "ม.1.10", subject: "อังกฤษพื้นฐาน"},
            { day: "จันทร์", start: "12:40", end: "13:30", class: "ม.1.10", subject: "วิทยาศาสตร์"},
            { day: "จันทร์", start: "13:30", end: "14:20", class: "ม.1.10", subject: "ภาษาไทย"},
            { day: "อังคาร", start: "08:30", end: "09:20", class: "ม.1.10", subject: "สุขศึกษา"},
            { day: "อังคาร", start: "09:20", end: "11:00", class: "ม.1.10", subject: "คณิตศษสตร์"},
            { day: "อังคาร", start: "11:50", end: "13:30", class: "ม.1.10", subject: "อังกฤษสื่อสาร"},
            { day: "อังคาร", start: "13:30", end: "14:20", class: "ม.1.10", subject: "ประวัติศาสตร์"},
            { day: "พุธ", start: "07:30", end: "08:30", class: "ม.1.10", subject: "พบครูที่ปรึกษา"},
            { day: "พุธ", start: "08:30", end: "09:20", class: "ม.1.10", subject: "แนะแนว"},
            { day: "พุธ", start: "09:20", end: "11:00", class: "ม.1.10", subject: "ภาษาไทย"},
            { day: "พฤหัสบดี", start: "08:30", end: "09:20", class: "ม.1.10", subject: "คณิตศาสตร์"},
            { day: "พฤหัสบดี", start: "11:50", end: "13:30", class: "ม.1.10", subject: "สังคมศึกษา"},
            { day: "พฤหัสบดี", start: "13:30", end: "15:10", class: "ม.1.10", subject: "อังกฤษสื่อสาร"},
            { day: "ศุกร์", start: "10:10", end: "11:50", class: "ม.1.10", subject: "อังกฤษพื้นฐาน"},
            { day: "ศุกร์", start: "12:40", end: "14:20", class: "ม.1.10", subject: "วิทยาศาสตร์"}
        ],

        "ห้อง 243": [
		    { day: "จันทร์", start: "08:30", end: "10:10", class: "ม.1.13", subject: "คณิตศาสตร์"},
		    { day: "จันทร์", start: "10:10", end: "11:00", class: "ม.1.13", subject: "สุขศึกษา"},
		    { day: "จันทร์", start: "11:50", end: "13:30", class: "ม.1.13", subject: "อังกฤษสื่อสาร"},
		    { day: "จันทร์", start: "13:30", end: "14:20", class: "ม.1.13", subject: "แนะแนว"},
		    { day: "จันทร์", start: "14:20", end: "15:10", class: "ม.1.13", subject: "สังคมศึกษา"},
		    { day: "อังคาร", start: "08:30", end: "10:10", class: "ม.1.13", subject: "วิทยาศาสตร์"},
		    { day: "อังคาร", start: "10:10", end: "11:00", class: "ม.1.13", subject: "อังกฤษสื่อสาร"},
		    { day: "อังคาร", start: "11:50", end: "13:30", class: "ม.1.13", subject: "อังกฤษสื่อสาร"},
		    { day: "อังคาร", start: "13:30", end: "15:10", class: "ม.1.13", subject: "ภาษาไทย"},
		    { day: "พุธ", start: "07:30", end: "08:30", class: "ม.1.13", subject: "พบครูที่ปรึกษา"},
		    { day: "พุธ", start: "08:30", end: "10:10", class: "ม.1.13", subject: "สังคมศึกษา"},
		    { day: "พุธ", start: "10:10", end: "11:00", class: "ม.1.13", subject: "คณิตศาสตร์"},
		    { day: "พฤหัสบดี", start: "08:30", end: "10:10", class: "ม.1.13", subject: "อังกฤษสื่อสาร"},
		    { day: "พฤหัสบดี", start: "10:10", end: "11:00", class: "ม.1.13", subject: "ประวัติศาสตร์"},
		    { day: "พฤหัสบดี", start: "13:30", end: "15:10", class: "ม.1.13", subject: "วิทยาศาสตร์"},
		    { day: "ศุกร์", start: "08:30", end: "09:20", class: "ม.1.13", subject: "ภาษาไทย"},
		    { day: "ศุกร์", start: "11:50", end: "12:40", class: "ม.1.13", subject: "วิทยาศาสตร์"},
		    { day: "ศุกร์", start: "12:40", end: "14:20", class: "ม.1.13", subject: "คณิตศาสตร์"}
		],

        "ห้อง 244": [
		    { day: "จันทร์", start: "08:30", end: "10:10", class: "ม.2.13", subject: "วิทยาศาสตร์"},
		    { day: "จันทร์", start: "10:10", end: "11:00", class: "ม.2.13", subject: "ภาษาไทย"},
		    { day: "อังคาร", start: "08:30", end: "10:10", class: "ม.2.13", subject: "คณิตศาสตร์"},
		    { day: "อังคาร", start: "10:10", end: "11:00", class: "ม.2.13", subject: "สังคมศึกษา"},
		    { day: "อังคาร", start: "12:40", end: "13:30", class: "ม.2.13", subject: "ประวัติศาสตร์"},
		    { day: "อังคาร", start: "13:30", end: "15:10", class: "ม.2.13", subject: "ภาษาอังกฤษ"},
		    { day: "พุธ", start: "08:30", end: "09:20", class: "ม.2.13", subject: "สุขศึกษา"},
		    { day: "พุธ", start: "09:20", end: "11:00", class: "ม.2.13", subject: "ภาษาไทย"},
		    { day: "พุธ", start: "11:50", end: "13:30", class: "ม.2.13", subject: "คณิตศาสตร์"},
		    { day: "พุธ", start: "13:30", end: "15:10", class: "ม.2.13", subject: "ภาษาอังกฤษ"},
		    { day: "พฤหัสบดี", start: "08:30", end: "10:10", class: "ม.2.13", subject: "สังคมศึกษา"},
		    { day: "พฤหัสบดี", start: "10:10", end: "11:00", class: "ม.2.13", subject: "คณิตศาสตร์"},
		    { day: "พฤหัสบดี", start: "11:50", end: "13:30", class: "ม.2.13", subject: "วิทยาศาสตร์"},
		    { day: "พฤหัสบดี", start: "13:30", end: "15:10", class: "ม.2.13", subject: "ภาษาอังกฤษ"},
		    { day: "ศุกร์", start: "10:10", end: "11:00", class: "ม.2.13", subject: "ภาษาอังกฤษ"},
		    { day: "ศุกร์", start: "13:30", end: "14:20", class: "ม.2.13", subject: "วิทยาศาสตร์"},
		    { day: "ศุกร์", start: "14:20", end: "15:10", class: "ม.2.13", subject: "IS"}
		],

		"ห้อง 247": [
			{day: "จันทร์", start: "08:30", end: "09:20", class: "ม.3.13", subject: "ภาษาไทย"},
			{day: "จันทร์", start: "09:20", end: "10:10", class: "ม.3.13", subject: "ภาษาไทย"},
			{day: "จันทร์", start: "10:10", end: "11:00", class: "ม.3.13", subject: "แนะแนว"},
			{day: "จันทร์", start: "11:50", end: "12:40", class: "ม.3.13", subject: "คณิต"},
			{day: "จันทร์", start: "12:40", end: "13:30", class: "ม.3.13", subject: "คณิต"},
			{day: "จันทร์", start: "13:30", end: "14:20", class: "ม.3.13", subject: "อังกฤษ"},
			{day: "จันทร์", start: "14:20", end: "15:10", class: "ม.3.13", subject: "อังกฤษ"},
			{day: "อังคาร", start: "10:10", end: "11:00", class: "ม.3.13", subject: "วิทย์เพิ่มเติม"},
			{day: "อังคาร", start: "11:50", end: "12:40", class: "ม.3.13", subject: "วิทย์พื้นฐาน"},
			{day: "อังคาร", start: "12:40", end: "13:30", class: "ม.3.13", subject: "วิทย์พื้นฐาน"},
			{day: "อังคาร", start: "13:30", end: "14:20", class: "ม.3.13", subject: "อังกฤษเสริม"},
			{day: "อังคาร", start: "14:20", end: "15:10", class: "ม.3.13", subject: "อังกฤษเสริม"},
			{day: "พุธ", start: "08:30", end: "09:20", class: "ม.3.13", subject: "คณิตพื้นฐาน"},
			{day: "พุธ", start: "09:20", end: "10:10", class: "ม.3.13", subject: "คณิตพื้นฐาน"},
			{day: "พุธ", start: "10:10", end: "11:00", class: "ม.3.13", subject: "อังกฤษ"},
			{day: "พุธ", start: "11:50", end: "12:40", class: "ม.3.13", subject: "สังคม"},
			{day: "พุธ", start: "13:30", end: "14:20", class: "ม.3.13", subject: "สุขศึกษา"},
			{day: "พฤหัสบดี", start: "08:30", end: "09:20", class: "ม.3.13", subject: "อังกฤษเพิ่ม"},
			{day: "พฤหัสบดี", start: "09:20", end: "10:10", class: "ม.3.13", subject: "อังกฤษเพิ่ม"},
			{day: "พฤหัสบดี", start: "10:10", end: "11:00", class: "ม.3.13", subject: "ภาษาไทย"},
			{day: "พฤหัสบดี", start: "11:50", end: "12:40", class: "ม.3.13", subject: "สังคม"},
			{day: "พฤหัสบดี", start: "12:40", end: "13:30", class: "ม.3.13", subject: "วิทย์เพิ่มเติม"},
			{day: "พฤหัสบดี", start: "13:30", end: "14:20", class: "ม.3.13", subject: "วิทย์เพิ่มเติม"},
			{day: "ศุกร์", start: "08:30", end: "09:20", class: "ม.3.13", subject: "สังคม"},
			{day: "ศุกร์", start: "09:20", end: "10:10", class: "ม.3.13", subject: "สังคม"},
			{day: "ศุกร์", start: "10:10", end: "11:00", class: "ม.3.13", subject: "คณิตพื้นฐาน"}
		]
    },

    "building-3": {
        "ห้อง 301": [
            { day: "จันทร์", start: "13:50", end: "14:30", class: "ม.3.1", subject: "วิทยาศาสตร์"},
            { day: "จันทร์", start: "14:30", end: "15:00", class: "ม.3.2", subject: "ภาษาไทย"}
        ]
    },

    "building-4": {
        "ห้อง 421": [
		    { day: "จันทร์", start: "08:30", end: "10:10", class: "ม.3.5", subject: "ภาษาไทย"},
		    { day: "อังคาร", start: "09:20", end: "11:00", class: "ม.3.5", subject: "คณิตศาสตร์"},
		    { day: "อังคาร", start: "13:30", end: "14:20", class: "ม.3.5", subject: "แนะแนว"},
		    { day: "อังคาร", start: "14:20", end: "15:10", class: "ม.3.5", subject: "อังกฤษพื้นฐาน"},
		    { day: "พุธ", start: "08:30", end: "10:10", class: "ม.3.5", subject: "สังคมศึกษา"},
		    { day: "พุธ", start: "11:50", end: "13:30", class: "ม.3.5", subject: "อังกฤษสื่อสาร"},
		    { day: "พุธ", start: "13:30", end: "14:20", class: "ม.3.5", subject: "สุขศึกษา"},
		    { day: "พุธ", start: "14:20", end: "15:10", class: "ม.3.5", subject: "ประวัติศาสตร์"},
		    { day: "พฤหัสบดี", start: "08:30", end: "10:10", class: "ม.3.5", subject: "คณิตศาสตร์"},
		    { day: "พฤหัสบดี", start: "10:10", end: "11:00", class: "ม.3.5", subject: "สังคมศึกษา"},
		    { day: "พฤหัสบดี", start: "14:20", end: "15:10", class: "ม.3.5", subject: "ภาษาไทย"},
		    { day: "ศุกร์", start: "08:30", end: "10:10", class: "ม.3.5", subject: "อังกฤษพื้นฐาน"},
		    { day: "ศุกร์", start: "12:40", end: "13:30", class: "ม.3.5", subject: "คณิตศาสตร์"}
		],

        "ห้อง 422": [
		    { day: "จันทร์", start: "08:30", end: "09:20", class: "ม.3.6", subject: "คณิตศาสตร์"},
		    { day: "จันทร์", start: "09:20", end: "10:10", class: "ม.3.6", subject: "ประวัติศาสตร์"},
		    { day: "จันทร์", start: "12:40", end: "13:30", class: "ม.3.6", subject: "วิทยาศาสตร์"},
		    { day: "จันทร์", start: "13:30", end: "15:10", class: "ม.3.6", subject: "สังคมศึกษา"},
		    { day: "อังคาร", start: "08:30", end: "09:20", class: "ม.3.6", subject: "ภาษาไทย"},
		    { day: "อังคาร", start: "11:50", end: "13:30", class: "ม.3.6", subject: "คณิตศาสตร์"},
		    { day: "อังคาร", start: "13:30", end: "14:20", class: "ม.3.6", subject: "อังกฤษพื้นฐาน"},
		    { day: "อังคาร", start: "14:20", end: "15:10", class: "ม.3.6", subject: "สุขศึกษา"},
		    { day: "พุธ", start: "11:50", end: "13:30", class: "ม.3.6", subject: "อังกฤษสื่อสาร"},
		    { day: "พุธ", start: "14:20", end: "15:10", class: "ม.3.6", subject: "สังคมศึกษา"},
		    { day: "พฤหัสบดี", start: "10:10", end: "11:00", class: "ม.3.6", subject: "แนะแนว"},
		    { day: "พฤหัสบดี", start: "11:50", end: "13:30", class: "ม.3.6", subject: "ภาษาไทย"},
		    { day: "พฤหัสบดี", start: "13:30", end: "15:10", class: "ม.3.6", subject: "อังกฤษพื้นฐาน"},
		    { day: "ศุกร์", start: "08:30", end: "10:10", class: "ม.3.6", subject: "คณิตศาสตร์"}
		],

        "ห้อง 425": [
		    { day: "จันทร์", start: "12:40", end: "13:30", class: "ม.3.7", subject: "สุขศึกษา"},
		    { day: "จันทร์", start: "13:30", end: "14:20", class: "ม.3.7", subject: "ภาษาไทย"},
		    { day: "จันทร์", start: "14:20", end: "15:10", class: "ม.3.7", subject: "ประวัติศาสตร์"},
		    { day: "อังคาร", start: "08:30", end: "10:10", class: "ม.3.7", subject: "คณิตศาสตร์"},
		    { day: "อังคาร", start: "10:10", end: "11:00", class: "ม.3.7", subject: "อังกฤษพื้นฐาน"},
		    { day: "อังคาร", start: "11:50", end: "13:30", class: "ม.3.7", subject: "ภาษาไทย"},
		    { day: "อังคาร", start: "13:30", end: "14:20", class: "ม.3.7", subject: "สังคมศึกษา"},
		    { day: "พุธ", start: "08:30", end: "10:10", class: "ม.3.7", subject: "อังกฤษพื้นฐาน"},
		    { day: "พฤหัสบดี", start: "08:30", end: "10:10", class: "ม.3.7", subject: "คณิตศาสตร์"},
		    { day: "พฤหัสบดี", start: "11:50", end: "12:40", class: "ม.3.7", subject: "คณิตศาสตร์"},
		    { day: "พฤหัสบดี", start: "12:40", end: "13:30", class: "ม.3.7", subject: "แนะแนว"},
		    { day: "พฤหัสบดี", start: "13:30", end: "15:10", class: "ม.3.7", subject: "สังคมศึกษา"},
		    { day: "ศุกร์", start: "08:30", end: "10:10", class: "ม.3.7", subject: "อังกฤษสื่อสาร"}
		],

        "ห้อง 426": [
		    { day: "จันทร์", start: "08:30", end: "10:10", class: "ม.3.8", subject: "ภาษาไทย"},
		    { day: "อังคาร", start: "08:30", end: "10:10", class: "ม.3.8", subject: "สังคมศึกษา"},
		    { day: "อังคาร", start: "11:50", end: "13:30", class: "ม.3.8", subject: "อังกฤษพื้นฐาน"},
		    { day: "อังคาร", start: "13:30", end: "14:20", class: "ม.3.8", subject: "สุขศึกษา"},
		    { day: "พุธ", start: "08:30", end: "10:10", class: "ม.3.8", subject: "คณิตศาสตร์"},
		    { day: "พุธ", start: "10:10", end: "11:00", class: "ม.3.8", subject: "อังกฤษพื้นฐาน"},
		    { day: "พุธ", start: "11:50", end: "12:40", class: "ม.3.8", subject: "ประวัติศาสตร์"},
		    { day: "พุธ", start: "12:40", end: "13:30", class: "ม.3.8", subject: "ภาษาไทย"},
		    { day: "พุธ", start: "13:30", end: "15:10", class: "ม.3.8", subject: "อังกฤษสื่อสาร"},
		    { day: "พฤหัสบดี", start: "10:10", end: "11:00", class: "ม.3.8", subject: "สังคมศึกษา"},
		    { day: "พฤหัสบดี", start: "11:50", end: "13:30", class: "ม.3.8", subject: "คณิตศาสตร์"},
		    { day: "พฤหัสบดี", start: "13:30", end: "14:20", class: "ม.3.8", subject: "แนะแนว"},
		    { day: "ศุกร์", start: "12:40", end: "13:30", class: "ม.3.8", subject: "คณิตศาสตร์"}
		],

        "ห้อง 431": [
		    { day: "จันทร์", start: "10:10", end: "11:00", class: "ม.2.7", subject: "IS"},
		    { day: "จันทร์", start: "11:50", end: "13:30", class: "ม.2.7", subject: "คณิตศาตร์"},
		    { day: "อังคาร", start: "10:10", end: "11:00", class: "ม.2.7", subject: "สังคมศึกษา"},
            { day: "อังคาร", start: "11:50", end: "12:40", class: "ม.2.7", subject: "ภาษาไทย"},
            { day: "อังคาร", start: "12:40", end: "14:20", class: "ม.2.7", subject: "อังกฤษพื้นฐาน"},
            { day: "พุธ", start: "08:30", end: "10:10", class: "ม.2.7", subject: "อังกฤษสื่อสาร"},
            { day: "พุธ", start: "12:40", end: "14:20", class: "ม.2.7", subject: "ภาษาไทย"},
            { day: "พฤหัสบดี", start: "09:20", end: "11:00", class: "ม.2.7", subject: "สังคมศึกษา"},
            { day: "พฤหัสบดี", start: "11:50", end: "12:40", class: "ม.2.7", subject: "อังกฤษพื้นฐาน"},
            { day: "พฤหัสบดี", start: "12:40", end: "13:30", class: "ม.2.7", subject: "คณิตศาสตร์"},
            { day: "ศุกร์", start: "08:30", end: "10:10", class: "ม.2.7", subject: "คณิตศาสตร์"},
            { day: "ศุกร์", start: "10:10", end: "11:00", class: "ม.2.7", subject: "วิทยาศาสตร์"},
            { day: "ศุกร์", start: "11:50", end: "12:40", class: "ม.2.7", subject: "ประวัติศาสตร์"},
            { day: "ศุกร์", start: "12:40", end: "13:30", class: "ม.2.7", subject: "แนะแนว"},
            { day: "ศุกร์", start: "13:30", end: "14:20", class: "ม.2.7", subject: "สุขศึกษา"}
		],

        "ห้อง 432": [
		    { day: "จันทร์", start: "08:30", end: "10:10", class: "ม.2.8", subject: "อังกฤษพื้นฐาน"},
		    { day: "จันทร์", start: "10:10", end: "11:00", class: "ม.2.8", subject: "คณิตศาสตร์"},
		    { day: "จันทร์", start: "11:50", end: "12:40", class: "ม.2.8", subject: "ประวัติศาสตร์"},
            { day: "อังคาร", start: "08:30", end: "10:10", class: "ม.2.8", subject: "อังกฤษสื่อสาร"},
			{ day: "อังคาร", start: "11:50", end: "13:30", class: "ม.2.8", subject: "ภาษาไทย"},
			{ day: "อังคาร", start: "13:30", end: "14:20", class: "ม.2.8", subject: "สุขศึกษา"},
			{ day: "อังคาร", start: "14:20", end: "15:10", class: "ม.2.8", subject: "แนะแนว"},
			{ day: "พุธ", start: "08:30", end: "10:10", class: "ม.2.8", subject: "สังคมศึกษา"},
			{ day: "พุธ", start: "12:40", end: "14:20", class: "ม.2.8", subject: "คณิคศาสตร์"},
			{ day: "พฤหัสบดี", start: "08:30", end: "10:10", class: "ม.2.8", subject: "คณิตศาสตร์"},
			{ day: "พฤหัสบดี", start: "10:10", end: "11:00", class: "ม.2.8", subject: "สังคมศึกษา"},
			{ day: "พฤหัสบดี", start: "11:50", end: "12:40", class: "ม.2.8", subject: "IS"},
			{ day: "ศุกร์", start: "10:10", end: "11:00", class: "ม.2.8", subject: "ภาษาไทย"},
			{ day: "ศุกร์", start: "11:50", end: "12:40", class: "ม.2.8", subject: "จ/ญ"},
			{ day: "ศุกร์", start: "12:40", end: "13:30", class: "ม.2.8", subject: "อังกฤษพื้นฐาน"}
		],

        "ห้อง 433": [
		    { day: "จันทร์", start: "08:30", end: "09:20", class: "ม.3.1", subject: "สังคมศึกษา"},
		    { day: "จันทร์", start: "09:20", end: "11:00", class: "ม.3.1", subject: "คณิตศาสตร์"},
		    { day: "จันทร์", start: "11:50", end: "12:40", class: "ม.3.1", subject: "ภาษาไทย"},
		    { day: "จันทร์", start: "13:30", end: "14:20", class: "ม.3.1", subject: "ประวัติศาสตร์"},
		    { day: "จันทร์", start: "14:20", end: "15:10", class: "ม.3.1", subject: "วิทยาศาสตร์"},
		    { day: "อังคาร", start: "12:40", end: "14:20", class: "ม.3.1", subject: "อังกฤษพื้นฐาน"},
		    { day: "พุธ", start: "10:10", end: "11:00", class: "ม.3.1", subject: "สุขศึกษา"},
		    { day: "พุธ", start: "12:40", end: "13:30", class: "ม.3.1", subject: "คณิตศาสตร์"},
		    { day: "พุธ", start: "13:30", end: "15:10", class: "ม.3.1", subject: "อังกฤษสื่อสาร"},
		    { day: "พฤหัสบดี", start: "08:30", end: "09:20", class: "ม.3.1", subject: "อังกฤษพื้นฐาน"},
		    { day: "พฤหัสบดี", start: "09:20", end: "11:00", class: "ม.3.1", subject: "คณิตศาสตร์"},
		    { day: "พฤหัสบดี", start: "11:50", end: "13:30", class: "ม.3.1", subject: "สังคมศึกษา"},
		    { day: "ศุกร์", start: "08:30", end: "09:20", class: "ม.3.1", subject: "แนะแนว"},
		    { day: "ศุกร์", start: "09:20", end: "11:00", class: "ม.3.1", subject: "ภาษาไทย"}
		],

        "ห้อง 434": [
		    { day: "จันทร์", start: "08:30", end: "10:10", class: "ม.3.2", subject: "คณิตศาสตร์"},
		    { day: "จันทร์", start: "13:30", end: "15:10", class: "ม.3.2", subject: "อังกฤษสื่อสาร"},
		    { day: "อังคาร", start: "08:30", end: "09:20", class: "ม.3.2", subject: "คณิตศาสตร์"},
		    { day: "อังคาร", start: "09:20", end: "10:10", class: "ม.3.2", subject: "อังกฤษพื้นฐาน"},
		    { day: "อังคาร", start: "12:40", end: "13:30", class: "ม.3.2", subject: "วิทยาศาสตร์"},
		    { day: "อังคาร", start: "14:20", end: "15:10", class: "ม.3.2", subject: "สังคมศึกษา"},
		    { day: "พุธ", start: "10:10", end: "11:00", class: "ม.3.2", subject: "แนะแนว"},
		    { day: "พุธ", start: "11:50", end: "12:40", class: "ม.3.2", subject: "ภาษาไทย"},
		    { day: "พุธ", start: "13:30", end: "15:10", class: "ม.3.2", subject: "สังคมศึกษา"},
		    { day: "พฤหัสบดี", start: "12:40", end: "14:20", class: "ม.3.2", subject: "ภาษาไทย"},
		    { day: "พฤหัสบดี", start: "14:20", end: "15:10", class: "ม.3.2", subject: "ประวัติศาสตร์"},
		    { day: "ศุกร์", start: "08:30", end: "10:10", class: "ม.3.2", subject: "คณิตศาสตร์"},
		    { day: "ศุกร์", start: "10:10", end: "11:00", class: "ม.3.2", subject: "สุขศึกษา"},
		    { day: "ศุกร์", start: "11:50", end: "13:30", class: "ม.3.2", subject: "อังกฤษพื้นฐาน"}
		],

        "ห้อง 435": [
		    { day: "จันทร์", start: "08:30", end: "09:20", class: "ม.3.3", subject: "อังกฤษพื้นฐาน"},
		    { day: "จันทร์", start: "09:20", end: "11:00", class: "ม.3.3", subject: "คณิตศาสตร์"},
		    { day: "อังคาร", start: "08:30", end: "09:20", class: "ม.3.3", subject: "ประวัติศาสตร์"},
		    { day: "อังคาร", start: "10:10", end: "11:00", class: "ม.3.4", subject: "สุขศึกษา"},
		    { day: "อังคาร", start: "12:40", end: "13:30", class: "ม.3.3", subject: "ภาษาไทย"},
		    { day: "พุธ", start: "08:30", end: "10:10", class: "ม.3.3", subject: "คณิตศาสตร์"},
		    { day: "พุธ", start: "10:10", end: "11:00", class: "ม.3.3", subject: "สังคมศึกษา"},
		    { day: "พุธ", start: "11:50", end: "13:30", class: "ม.3.3", subject: "อังกฤษพื้นฐาน"},
		    { day: "พฤหัสบดี", start: "12:40", end: "13:30", class: "ม.3.3", subject: "คณิตศาสตร์"},
		    { day: "พฤหัสบดี", start: "13:30", end: "15:10", class: "ม.3.3", subject: "อังกฤษสื่อสาร"},
		    { day: "ศุกร์", start: "08:30", end: "10:10", class: "ม.3.3", subject: "สังคมศึกษา"},
		    { day: "ศุกร์", start: "10:10", end: "11:00", class: "ม.3.3", subject: "แนะแนว"},
		    { day: "ศุกร์", start: "12:40", end: "13:30", class: "ม.3.3", subject: "สุขศึกษา"}
		],

        "ห้อง 436": [
		    { day: "จันทร์", start: "08:30", end: "10:10", class: "ม.3.4", subject: "อังกฤษสื่อสาร"},
		    { day: "จันทร์", start: "12:40", end: "13:30", class: "ม.3.4", subject: "ภาษาไทย"},
		    { day: "จันทร์", start: "13:30", end: "14:20", class: "ม.3.4", subject: "ประวัติศาสตร์"},
		    { day: "อังคาร", start: "08:30", end: "10:10", class: "ม.3.4", subject: "อังกฤษพื้นฐาน"},
		    { day: "อังคาร", start: "11:50", end: "12:40", class: "ม.3.4", subject: "วิทยาศาสตร์"},
		    { day: "อังคาร", start: "12:40", end: "14:20", class: "ม.3.4", subject: "คณิตศาสตร์"},
		    { day: "อังคาร", start: "14:20", end: "15:10", class: "ม.3.4", subject: "แนะแนว"},
		    { day: "พุธ", start: "08:30", end: "10:10", class: "ม.3.4", subject: "ภาษาไทย"},
		    { day: "พุธ", start: "10:10", end: "11:00", class: "ม.3.4", subject: "คณิตศาสตร์"},
		    { day: "พฤหัสบดี", start: "09:20", end: "11:00", class: "ม.3.4", subject: "สังคมศึกษา"},
		    { day: "พฤหัสบดี", start: "13:30", end: "14:20", class: "ม.3.4", subject: "ประวัติศาสตร์"},
		    { day: "ศุกร์", start: "08:30", end: "10:10", class: "ม.3.4", subject: "คณิตศาสตร์"},
		    { day: "ศุกร์", start: "12:40", end: "13:30", class: "ม.3.4", subject: "อังกฤษพื้นฐาน"}
		],

        "ห้อง 441": [
		    { day: "จันทร์", start: "08:30", end: "09:20", class: "ม.2.6", subject: "วิทยาศาสตร์"},
		    { day: "จันทร์", start: "10:10", end: "11:00", class: "ม.2.6", subject: "ภาษาไทย"},
		    { day: "อังคาร", start: "08:30", end: "10:10", class: "ม.2.6", subject: "อังกฤษพื้นฐาน"},
		    { day: "อังคาร", start: "10:10", end: "11:00", class: "ม.2.6", subject: "IS"},
		    { day: "อังคาร", start: "11:50", end: "13:30", class: "ม.2.6", subject: "คณิตศาสตร์"},
		    { day: "อังคาร", start: "13:30", end: "14:20", class: "ม.2.6", subject: "แนะแนว"},
		    { day: "พุธ", start: "08:30", end: "10:10", class: "ม.2.6", subject: "สังคมศึกษา"},
		    { day: "พุธ", start: "12:40", end: "13:30", class: "ม.2.6", subject: "ภาษาไทย"},
		    { day: "พฤหัสบดี", start: "08:30", end: "09:20", class: "ม.2.6", subject: "สุขศึกษา"},
		    { day: "พฤหัสบดี", start: "09:20", end: "10:10", class: "ม.2.6", subject: "อังกฤษพื้นฐาน"},
		    { day: "พฤหัสบดี", start: "10:10", end: "11:00", class: "ม.2.6", subject: "สังคมศึกษา"},
		    { day: "พฤหัสบดี", start: "11:50", end: "13:30", class: "ม.2.6", subject: "คณิตศาสตร์"},
		    { day: "พฤหัสบดี", start: "13:30", end: "15:10", class: "ม.2.6", subject: "อังกฤษสื่อสาร"},
		    { day: "ศุกร์", start: "10:10", end: "11:00", class: "ม.2.6", subject: "คณิตสาสตร์"},
		    { day: "ศุกร์", start: "11:50", end: "12:40", class: "ม.2.6", subject: "ประวัติศาสตร์"}
		],

        "ห้อง 442": [
		    { day: "จันทร์", start: "10:10", end: "11:00", class: "ม.2.5", subject: "อังกฤษพื้นฐาน"},
		    { day: "จันทร์", start: "11:50", end: "13:30", class: "ม.2.5", subject: "สังคมศึกษา"},
		    { day: "อังคาร", start: "08:30", end: "10:10", class: "ม.2.5", subject: "คณิตศาสตร์"},
		    { day: "อังคาร", start: "10:10", end: "11:00", class: "ม.2.5", subject: "IS"},
		    { day: "อังคาร", start: "11:50", end: "13:30", class: "ม.2.5", subject: "อังกฤษสื่อสาร"},
		    { day: "พุธ", start: "08:30", end: "10:10", class: "ม.2.5", subject: "ภาษาไทย"},
		    { day: "พุธ", start: "12:40", end: "13:30", class: "ม.2.5", subject: "ประวัติศาสตร์"},
		    { day: "พฤหัสบดี", start: "10:10", end: "11:00", class: "ม.2.5", subject: "สุขศึกษา"},
		    { day: "พฤหัสบดี", start: "11:50", end: "12:40", class: "ม.2.5", subject: "คณิตศาสตร์"},
		    { day: "พฤหัสบดี", start: "12:40", end: "14:20", class: "ม.2.5", subject: "อังกฤษพื้นฐาน"},
		    { day: "ศุกร์", start: "09:20", end: "10:10", class: "ม.2.5", subject: "สังคมศึกษา"},
		    { day: "ศุกร์", start: "10:10", end: "11:00", class: "ม.2.5", subject: "ภาษาไทย"},
		    { day: "ศุกร์", start: "11:50", end: "13:30", class: "ม.2.5", subject: "คณิตศาสตร์"},
		    { day: "ศุกร์", start: "13:30", end: "14:20", class: "ม.2.5", subject: "แนะแนว"}
		],

        "ห้อง 443": [
		    { day: "จันทร์", start: "10:10", end: "11:00", class: "ม.2.4", subject: "สังคมศึกษา"},
		    { day: "จันทร์", start: "11:50", end: "13:30", class: "ม.2.4", subject: "คณิตศาสตร์"},
		    { day: "อังคาร", start: "08:30", end: "09:20", class: "ม.2.4", subject: "สุขศึกษา"},
		    { day: "อังคาร", start: "09:20", end: "11:00", class: "ม.2.4", subject: "ภาษาไทย"},
		    { day: "อังคาร", start: "11:50", end: "12:40", class: "ม.2.4", subject: "แนะแนว"},
		    { day: "อังคาร", start: "12:40", end: "14:20", class: "ม.2.4", subject: "สังคมศึกษา"},
		    { day: "พฤหัสบดี", start: "08:30", end: "10:10", class: "ม.2.4", subject: "อังกฤษพื้นฐาน"},
		    { day: "พฤหัสบดี", start: "10:10", end: "11:00", class: "ม.2.4", subject: "ภาษาไทย"},
		    { day: "ศุกร์", start: "08:30", end: "09:20", class: "ม.2.4", subject: "อังกฤษพื้่นฐาน"},
		    { day: "ศุกร์", start: "09:20", end: "11:00", class: "ม.2.4", subject: "คณิตศาสตร์"},
		    { day: "ศุกร์", start: "11:50", end: "12:40", class: "ม.2.4", subject: "คณิตศาสตร์"},
		    { day: "ศุกร์", start: "12:40", end: "13:30", class: "ม.2.4", subject: "ประวัติศาสตร์"}
		],

        "ห้อง 444": [
		    { day: "จันทร์", start: "09:20", end: "10:10", class: "ม.2.3", subject: "สังคมศึกษา"},
		    { day: "จันทร์", start: "10:10", end: "11:00", class: "ม.2.3", subject: "ประวัติศาสตร์"},
		    { day: "อังคาร", start: "08:30", end: "10:10", class: "ม.2.3", subject: "สังคมศึกษา"},
		    { day: "อังคาร", start: "10:10", end: "11:00", class: "ม.2.3", subject: "แนะแนว"},
		    { day: "อังคาร", start: "11:50", end: "13:30", class: "ม.2.3", subject: "คณิตศาสตร์"},
		    { day: "อังคาร", start: "13:30", end: "15:10", class: "ม.2.3", subject: "อังกฤษพื้นฐาน"},
		    { day: "พฤหัสบดี", start: "08:30", end: "10:10", class: "ม.2.3", subject: "คณิตศาสตร์"},
		    { day: "พฤหัสบดี", start: "10:10", end: "11:00", class: "ม.2.3", subject: "อังกฤษพื้นฐาน"},
		    { day: "พฤหัสบดี", start: "11:50", end: "12:40", class: "ม.2.3", subject: "สุขศึกษา"},
		    { day: "พฤหัสบดี", start: "12:40", end: "13:30", class: "ม.2.3", subject: "ภาษาไทย"},
		    { day: "ศุกร์", start: "08:30", end: "10:10", class: "ม.2.3", subject: "ภาษาไทย"},
		    { day: "ศุกร์", start: "10:10", end: "11:00", class: "ม.2.3", subject: "คณิตศาสตร์"},
		    { day: "ศุกร์", start: "13:30", end: "15:10", class: "ม.2.3", subject: "อังกฤษสื่อสาร"}
		],

        "ห้อง 445": [
		    { day: "จันทร์", start: "08:30", end: "10:10", class: "ม.2.2", subject: "คณิตศาสตร์"},
		    { day: "จันทร์", start: "10:10", end: "11:00", class: "ม.2.2", subject: "สังคมศึกษา"},
		    { day: "จันทร์", start: "11:50", end: "13:30", class: "ม.2.2", subject: "อังกฤษสื่อสาร"},
		    { day: "อังคาร", start: "10:10", end: "11:00", class: "ม.2.2", subject: "สุขศึกษา"},
		    { day: "อังคาร", start: "11:50", end: "13:30", class: "ม.2.2", subject: "อังกฤษพื้นฐาน"},
		    { day: "อังคาร", start: "13:30", end: "14:20", class: "ม.2.2", subject: "ภาษาไทย"},
		    { day: "พุธ", start: "08:30", end: "10:10", class: "ม.2.2", subject: "คณิตศาสตร์"},
		    { day: "พุธ", start: "11:50", end: "12:40", class: "ม.2.2", subject: "แนะแนว"},
		    { day: "พฤหัสบดี", start: "08:30", end: "10:10", class: "ม.2.2", subject: "ภาษาไทย"},
		    { day: "พฤหัสบดี", start: "10:10", end: "11:00", class: "ม.2.2", subject: "อังกฤษพพื้นฐาน"},
		    { day: "พฤหัสบดี", start: "13:30", end: "14:20", class: "ม.2.2", subject: "คณิตศาสตร์"},
		    { day: "พฤหัสบดี", start: "14:20", end: "15:10", class: "ม.2.2", subject: "ประวัติศาสตร์"},
		    { day: "พฤหัสบดี", start: "08:30", end: "10:10", class: "ม.2.2", subject: "สังคมศึกษา"},
		    { day: "พฤกัสบดี", start: "13:30", end: "14:20", class: "ม.2.2", subject: "วิทยาศาสตร์"}
		],

        "ห้อง 446": [
            { day: "จันทร์", start: "08:30", end: "10:10", class: "ม.2.1", subject: "คณิตศาสตร์"},
            { day: "จันทร์", start: "10:10", end: "11:00", class: "ม.2.1", subject: "แนะแนว"},
		    { day: "จันทร์", start: "11:50", end: "13:30", class: "ม.2.1", subject: "อังกฤษพื้นฐาน"},
		    { day: "อังคาร", start: "08:30", end: "10:10", class: "ม.2.1", subject: "อังกฤษสื่อสาร"},
		    { day: "อังคาร", start: "11:50", end: "13:30", class: "ม.2.1", subject: "ภาษาไทย"},
		    { day: "อังคาร", start: "13:30", end: "14:20", class: "ม.2.1", subject: "คณิตศาตร์"},
		    { day: "พุธ", start: "08:30", end: "10:10", class: "ม.2.1", subject: "สังคมศึกษา"},
		    { day: "พุธ", start: "10:10", end: "11:00", class: "ม.2.1", subject: "วิทยาศาสตร์"},
		    { day: "พุธ", start: "12:40", end: "13:30", class: "ม.2.1", subject: "ประวัติศาสตร์"},
		    { day: "พุธ", start: "13:30", end: "14:20", class: "ม.2.1", subject: "ภาษาไทย"},
		    { day: "พฤหัสบดี", start: "08:30", end: "09:20", class: "ม.2.1", subject: "อังกฤษพื้นฐาน"},
		    { day: "พฤหัสบดี", start: "11:50", end: "13:30", class: "ม.2.1", subject: "คณิตศาสตร์"},
		    { day: "ศุกร์", start: "10:10", end: "11:00", class: "ม.2.1", subject: "สังคมศึกษา"},
		    { day: "ศุกร์", start: "11:50", end: "12:40", class: "ม.2.1", subject: "สุขศึกษา"}
        ]
    },

    "building-5": {
        "ห้อง 521": [
            { day: "จันทร์", start: "08:30", end: "09:20", class: "ม.1.12", subject: "สุขศึกษา"},
            { day: "จันทร์", start: "09:20", end: "11:00", class: "ม.1.12", subject: "ภาษาไทย"},
            { day: "จันทร์", start: "11:50", end: "13:30", class: "ม.1.12", subject: "คณิตศาสตร์"},
		    { day: "จันทร์", start: "13:30", end: "15:10", class: "ม.1.12", subject: "อังกฤษพื้นฐาน"},
		    { day: "อังคาร", start: "08:30", end: "10:10", class: "ม.1.12", subject: "สังคมศึกษา"},
		    { day: "อังคาร", start: "10:10", end: "11:00", class: "ม.1.12", subject: "อังกฤษพื้นฐาน"},
		    { day: "พุธ", start: "07:30", end: "08:30", class: "ม.1.12", subject: "พบครูที่ปรึกษา"},
		    { day: "พุธ", start: "08:30", end: "10:10", class: "ม.1.12", subject: "อังกฤษสื่อสาร"},
		    { day: "พุธ", start: "10:10", end: "11:00", class: "ม.1.12", subject: "คณิตศาสตร์"},
		    { day: "พุธ", start: "11:50", end: "13:30", class: "ม.1.12", subject: "วิทยาศาสตร์"},
		    { day: "พฤหัสบดี", start: "08:30", end: "09:20", class: "ม.1.12", subject: "แนะแนว"},
		    { day: "พฤหัสบดี", start: "09:20", end: "11:00", class: "ม.1.12", subject: "วิทยาศาสตร์"},
		    { day: "พฤหัสบดี", start: "11:50", end: "12:40", class: "ม.1.12", subject: "ภาษาไทย"},
		    { day: "พฤหัสบดี", start: "12:40", end: "13:30", class: "ม.1.12", subject: "ประวัติศาสตร์"},
		    { day: "พฤหัสบดี", start: "13:30", end: "15:10", class: "ม.1.12", subject: "วิทยาศาสตร์"},
		    { day: "ศุกร์", start: "08:30", end: "10:10", class: "ม.1.12", subject: "คณิตศาสตร์"},
		    { day: "ศุกร์", start: "10:10", end: "11:00", class: "ม.1.12", subject: "วิทยาศาสตร์"},
		    { day: "ศุกร์", start: "11:50", end: "12:40", class: "ม.1.12", subject: "สังคมศึกษา"}
        ],

        "ห้อง 522": [
		    { day: "จันทร์", start: "08:30", end: "10:10", class: "ม.2.12", subject: "อังกฤษพื้นฐาน"},
		    { day: "จันทร์", start: "10:10", end: "11:00", class: "ม.2.12", subject: "วิทยาศาสตร์"},
		    { day: "จันทร์", start: "11:50", end: "13:30", class: "ม.2.12", subject: "คณิตศาสตร์"},
		    { day: "อังคาร", start: "09:20", end: "11:00", class: "ม.2.12", subject: "ภาษาไทย"},
		    { day: "อังคาร", start: "13:30", end: "15:10", class: "ม.2.12", subject: "วิทยาศาสตร์"},
		    { day: "พุธ", start: "10:10", end: "11:00", class: "ม.2.12", subject: "ประวัติศาสตร์"},
		    { day: "พุธ", start: "11:50", end: "13:30", class: "ม.2.12", subject: "คณิตศาสตร์"},
		    { day: "พฤหัสบดี", start: "08:30", end: "10:10", class: "ม.2.12", subject: "วิทยาศาสตร์"},
		    { day: "พฤหัสบดี", start: "10:10", end: "11:00", class: "ม.2.12", subject: "ภาษาไทย"},
		    { day: "พฤหัสบดี", start: "11:50", end: "13:30", class: "ม.2.12", subject: "สังคมศึกษา"},
		    { day: "พฤหัสบดี", start: "13:30", end: "14:20", class: "ม.2.12", subject: "อังกฤษพื้นฐาน"},
		    { day: "พฤหัสบดี", start: "14:20", end: "15:10", class: "ม.2.12", subject: "คณิตศาสตร์"},
		    { day: "ศุกร์", start: "08:30", end: "09:20", class: "ม.2.12", subject: "สังคมศึกษา"},
		    { day: "ศุกร์", start: "09:20", end: "11:00", class: "ม.2.12", subject: "อังกฤษพื้นฐาน"},
		    { day: "ศุกร์", start: "11:50", end: "12:40", class: "ม.2.12", subject: "แนะแนว"},
		    { day: "ศุกร์", start: "12:40", end: "14:20", class: "ม.2.12", subject: "วิทยาศาสตร์"},
		    { day: "ศุกร์", start: "14:20", end: "15:10", class: "ม.2.12", subject: "สุขศึกษา"}
		],

		"ห้อง 531": [
			{ day: "จันทร์", start: "10:10", end: "11:00", class: "ม.3.12", subject: "สังคมศึกษา"},
			{ day: "จันทร์", start: "11:50", end: "13:30", class: "ม.3.12", subject: "อังกฤษพื้นฐาน"},
			{ day: "จันทร์", start: "13:30", end: "14:20", class: "ม.3.12", subject: "คณิตศาสตร์"},
			{ day: "อังคาร", start: "09:20", end: "11:00", class: "ม.3.12", subject: "ภาษาไทย"},
			{ day: "อังคาร", start: "11:50", end: "13:30", class: "ม.3.12", subject: "สังคมศึกษา" },
			{ day: "อังคาร", start: "13:30", end: "14:20", class: "ม.3.12", subject: "วิทยาศาสตร์" },
			{ day: "พุธ", start: "08:30", end: "10:10", class: "ม.3.12", subject: "วิทยาศาสตร์"},
			{ day: "พุธ", start: "10:10", end: "11:00", class: "ม.3.12", subject: "อังกฤษพื้นฐาน"},
			{ day: "พุธ", start: "11:50", end: "13:30", class: "ม.3.12", subject: "คณิตศาสตร์"},
			{ day: "พฤหัสบดี", start: "08:30", end: "10:10", class: "ม.3.12", subject: "วิทยาศาสตร์"},
			{ day: "พฤหัสบดี", start: "11:50", end: "13:30", class: "ม.3.12", subject: "คณิตศาสตร์"},
			{ day: "พฤหัสบดี", start: "13:30", end: "14:20", class: "ม.3.12", subject: "สุขศึกษา"},
			{ day: "ศุกร์", start: "08:30", end: "09:20", class: "ม.3.12", subject: "ภาษาไทย"},
			{ day: "ศุกร์", start: "11:50", end: "12:40", class: "ม.3.12", subject: "แนะแนว"},
			{ day: "ศุกร์", start: "12:40", end: "13:30", class: "ม.3.12", subject: "ประวัติศาสตร์"}
		]
    },
      
    "building-multipurpose": {
        "ห้อง 1022": [
			{day: "จันทร์", start: "10:10", end: "11:00", class: "ม.3.9", subject: "สังคมศึกษา"},
			{day: "จันทร์", start: "11:50", end: "13:30", class: "ม.3.9", subject: "อังกฤษพื้นฐาน"},
			{day: "จันทร์", start: "13:30", end: "15:10", class: "ม.3.9", subject: "อังกฤษเพิ่มเติม"},
			{day: "อังคาร", start: "08:30", end: "09:20", class: "ม.3.9", subject: "สุขศึกษา"},
			{day: "อังคาร", start: "09:20", end: "11:00", class: "ม.3.9", subject: "คณิตศาสตร์"},
			{day: "อังคาร", start: "11:50", end: "12:40", class: "ม.3.9", subject: "แนะแนว"},
			{day: "อังคาร", start: "12:40", end: "13:30", class: "ม.3.9", subject: "ประวัติศาสตร์"},
			{day: "อังคาร", start: "13:30", end: "15:10", class: "ม.3.9", subject: "วิทยาศาสตร์เพิ่มเติม"},
			{day: "พุธ", start: "08:30", end: "10:10", class: "ม.3.9", subject: "สังคมศึกษา"},
			{day: "พุธ", start: "10:10", end: "11:00", class: "ม.3.9", subject: "วิทยาศาสตร์"},
			{day: "พุธ", start: "11:50", end: "13:30", class: "ม.3.9", subject: "คณิตศาสตร์"},
			{day: "พฤหัสบดี", start: "08:30", end: "09:20", class: "ม.3.9", subject: "คณิตศาสตร์"},
			{day: "พฤหัสบดี", start: "09:20", end: "11:00", class: "ม.3.9", subject: "ภาษาไทย"},
			{day: "พฤหัสบดี", start: "11:50", end: "12:40", class: "ม.3.9", subject: "อังกฤษพื้นฐาน"},
			{day: "พฤหัสบดี", start: "13:30", end: "15:10", class: "ม.3.9", subject: "อังกฤษสื่อสาร"},
			{day: "ศุกร์", start: "08:30", end: "09:20", class: "ม.3.9", subject: "ภาษาไทย"},
			{day: "ศุกร์", start: "11:50", end: "13:30", class: "ม.3.9", subject: "วิทยาศาสตร์"}
		],

		"ห้อง 1023": [
			{ day: "จันทร์", start: "10:10", end: "11:00", class: "ม.3.10", subject: "ภาษาไทย"},
			{ day: "จันทร์", start: "11:50", end: "13:30", class: "ม.3.10", subject: "คณิตศาสตร์"},
			{ day: "จันทร์", start: "13:30", end: "14:20", class: "ม.3.10", subject: "วิทยาศาสตร์"},
			{ day: "อังคาร", start: "08:30", end: "09:20", class: "ม.3.10", subject: "คณิตศาสตร์"},
			{ day: "อังคาร", start: "09:20", end: "11:00", class: "ม.3.10", subject: "ภาษาอังกฤษสื่อสาร"},
			{ day: "อังคาร", start: "11:50", end: "12:40", class: "ม.3.10", subject: "ประวัติศาสตร์"},
			{ day: "อังคาร", start: "12:40", end: "14:20", class: "ม.3.10", subject: "สังคมศึกษา"},
			{ day: "พุธ", start: "08:30", end: "09:20", class: "ม.3.10", subject: "แนะแนว"},
			{ day: "พุธ", start: "11:50", end: "13:30", class: "ม.3.10", subject: "ภาษาอังกฤษพื้นฐาน"},
			{ day: "พฤหัสบดี", start: "08:30", end: "09:20", class: "ม.3.10", subject: "สุขศึกษา"},
			{ day: "พฤหัสบดี", start: "09:20", end: "11:00", class: "ม.3.10", subject: "คณิตศาสตร์"},
			{ day: "พฤหัสบดี", start: "11:50", end: "13:30", class: "ม.3.10", subject: "ภาษาอังกฤษสื่อสาร"},
			{ day: "พฤหัสบดี", start: "13:30", end: "14:20", class: "ม.3.10", subject: "สังคมศึกษา"},
			{ day: "พฤหัสบดี", start: "14:20", end: "15:10", class: "ม.3.10", subject: "ภาษาอังกฤษพื้นฐาน"},
			{ day: "ศุกร์", start: "11:50", end: "13:30", class: "ม.3.10", subject: "ภาษาไทย"}
		],

		"com 1": [

		]
    }
};


export const manualRooms = {
    // ตัวอย่าง: ถ้าต้องการล็อกห้อง 122 ของอาคาร 1 ให้ไม่ว่างถึงเวลา 14:00
    "building-1_ห้อง 122": {
        mode: "manual",
        status: "busy",        // "busy" = ไม่ว่าง, "free" = ว่าง
        untilTime: "2025-12-05T14:00:00"
    },

    // ถ้าไม่มีอะไร ให้ปล่อยว่างแบบนี้ก็ได้
    // "building-1_ห้อง 201": null
};


// export สำหรับใช้ในไฟล์อื่น
export { buildings };