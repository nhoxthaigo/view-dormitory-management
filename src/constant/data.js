//data.js
import img_room1 from "/img/ktxnam.jpg"
import img_room2 from "/img/ktxnam2.jpg"
import img_room3 from "/img/ktxnam3.jpg"
import img_room4 from "/img/ktxnam4.jpg"
import img_room5 from "/img/ktxnam5.jpg"
import img_room6 from "/img/ktxnu.jpg"
import img_room7 from "/img/ktxnu2.jpg"
import img_room8 from "/img/ktxnu3.jpg"
import img_room9 from "/img/ktxnu4.jpg"
import img_room10 from "/img/ktxnu5.jpg"
import img4 from "/img/banner1.jpg"
import img2 from "/img/banner2.jpg"
import img3 from "/img/banner3.jpg"
import img1 from "/img/banner4.jpg"

export const dormitories = [
    {
      id: 1,
      name: "KTX Nam",
      address: "180 Cao Lỗ, Quận 8",
      total_rooms: 20,
      created_by: "admin",
      updated_by: "admin",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 2,
      name: "KTX Nữ",
      address: "Topaz Quận 8",
      total_rooms: 15,
      created_by: "admin",
      updated_by: null,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ];
  
export const rooms = [
    {
        id: 1,
        dormitory_id: 1,
        room_number: "A101",
        capacity: 6,
        current_occupancy: 2,
        room_type: "Phòng thường",
        status: "Còn Phòng",
        created_at: new Date(),
        updated_at: new Date(),
        img: img_room1,
        price: 125000,
      },
      {
        id: 2,
        dormitory_id: 1,
        room_number: "A102",
        capacity: 6,
        current_occupancy: 4,
        room_type: "Phòng thường",
        status: "Còn Phòng",
        created_at: new Date(),
        updated_at: new Date(),
        img: img_room2,
        price: 125000,
      },
    {
      id: 3,
      dormitory_id: 1,
      room_number: "A103",
      capacity: 6,
      current_occupancy: 2,
      room_type: "Phòng thường",
      status: "Còn Phòng",
      created_at: new Date(),
      updated_at: new Date(),
      img: img_room3,
      price: 125000,
    },
    {
      id: 4,
      dormitory_id: 1,
      room_number: "A104",
      capacity: 4,
      current_occupancy: 2,
      room_type: "Phòng  VIP",
      status: "Còn Phòng",
      created_at: new Date(),
      updated_at: new Date(),
      img: img_room4,
      price: 125000,
    },
    {
        id: 5,
        dormitory_id: 1,
        room_number: "A105",
        capacity: 4,
        current_occupancy: 2,
        room_type: "Phòng VIP",
        status: "Còn Phòng",
        created_at: new Date(),
        updated_at: new Date(),
        img: img_room5,
        price: 125000,
      },
      {
        id: 6,
        dormitory_id: 2,
        room_number: "T01",
        capacity: 6,
        current_occupancy: 4,
        room_type: "Phòng thường",
        status: "Còn Phòng",
        created_at: new Date(),
        updated_at: new Date(),
        img: img_room6,
        price: 225000,
      },
      {
        id: 7,
        dormitory_id: 2,
        room_number: "T02",
        capacity: 6,
        current_occupancy: 2,
        room_type: "Phòng thường",
        status: "Còn Phòng",
        created_at: new Date(),
        updated_at: new Date(),
        img: img_room7,
        price: 125000,
      },
      {
        id: 8,
        dormitory_id: 2,
        room_number: "T03",
        capacity: 6,
        current_occupancy: 2,
        room_type: "Phòng thường",
        status: "Còn Phòng",
        created_at: new Date(),
        updated_at: new Date(),
        img: img_room8,
        price: 125000,
      },
      {
        id: 9,
        dormitory_id: 2,
        room_number: "T04",
        capacity: 4,
        current_occupancy: 2,
        room_type: "Phòng VIP",
        status: "Còn Phòng",
        created_at: new Date(),
        updated_at: new Date(),
        img: img_room9,
        price: 255000,
      },
      {
        id: 10,
        dormitory_id: 2,
        room_number: "T05",
        capacity: 4,
        current_occupancy: 4,
        room_type: "Phòng VIP",
        status: "Còn Phòng",
        created_at: new Date(),
        updated_at: new Date(),
        img: img_room10,
        price: 255000,
      },
  ];
  
  export const roomAllocations = [
    {
      id: 1,
      student_id: "S123456",
      room_id: 1,
      start_date: "2025-03-01",
      end_date: null,
      status: "Đang ở",
      created_by: "admin",
      updated_by: null,
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 2,
      student_id: "S654321",
      room_id: 2,
      start_date: "2025-02-01",
      end_date: "2025-04-01",
      status: "Đã rời",
      created_by: "admin",
      updated_by: "admin",
      created_at: new Date(),
      updated_at: new Date(),
    },
  ];

  export const slide = [
    {
      image: img1,
      content: "Đăng ký phòng ký túc xác ngay để nhận được giá ưu đãi",
    },
    {
      image: img2,
      content: "Dormanage cung cấp dịch phụ kí túc xá cho sinh viên với giá siêu sinh viên",
    },
    {
      image: img3,
      content: "Phòng sạch sẽ, đẹp đẽ, thoải mái, đầy đủ tiện nghi",
    },
    {
      image: img4,
      content: "Hỗ trợ sinh viên khó khăn",
    },
  ];
