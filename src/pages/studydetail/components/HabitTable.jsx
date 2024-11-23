import React, { useState, useEffect } from 'react';
import { updateHabitStatus } from '../api/studyapi';

function HabitTable({ habit }) {
    const [habitData, setHabitData] = useState(habit);

    const daysOfWeek = [
        { name: '월', key: 'monday' },
        { name: '화', key: 'tuesday' },
        { name: '수', key: 'wednesday' },
        { name: '목', key: 'thursday' },
        { name: '금', key: 'friday' },
        { name: '토', key: 'saturday' },
        { name: '일', key: 'sunday' },
    ];

    // 이미지 경로 (습관 완료/미완료 상태를 나타내는 이미지)
    const checkIcon = "/img/success_check.png";  // 완료 이미지
    const uncheckIcon = "/img/fail_check.png";  // 미완료 이미지

    useEffect(() => {
        setHabitData(habit);
    }, [habit]);

    const handleClick = async (habitItemId, dayKey, currentStatus) => {
        try {
            const newStatus = !currentStatus;  // 현재 상태를 반전시킴
            const updatedData = await updateHabitStatus(habitItemId, dayKey, newStatus);

            // 상태 업데이트가 성공적으로 완료되면 UI를 갱신
            if (updatedData) {
                setHabitData((prevData) =>
                    prevData.map((item) =>
                        item.id === habitItemId
                            ? {
                                ...item,
                                [dayKey]: newStatus, // 반전된 상태로 업데이트
                            }
                            : item
                    )
                );
            }
        } catch (error) {
            console.error("습관 상태 업데이트 오류:", error);
        }
    };

    return (
        <div className="habit-box">
            <div className="habit-record-box">습관 기록표</div>
            {habitData && habitData.length === 0 ? (
                <div className="notyet-habit">
                    아직 습관이 없어요. 오늘의 습관에서 습관을 생성해보세요!
                </div>
            ) : (
                <div className="habit-table">
                    <div className='habit-table-day'>
                        <div className='habit-table-day-i'>월</div>
                        <div className='habit-table-day-i'>화</div>
                        <div className='habit-table-day-i'>수</div>
                        <div className='habit-table-day-i'>목</div>
                        <div className='habit-table-day-i'>금</div>
                        <div className='habit-table-day-i'>토</div>
                        <div className='habit-table-day-i'>일</div>
                    </div>
                    {habitData.map((habitItem) => (
                        <div className="habit-row" key={habitItem.id}>
                            <div className="habit-name">{habitItem.name}</div> {/* 습관 이름 표시 */}
                            <div className="habit-status-container">
                                {daysOfWeek.map((day) => {
                                    const dayStatus = habitItem[day.key]; // 해당 요일의 true/false 값
                                    return (
                                        <div key={day.key} className="habit-status"
                                            onClick={() => handleClick(habitItem.id, day.key)}
                                        >
                                            <img
                                                src={dayStatus ? checkIcon : uncheckIcon}
                                                alt={dayStatus ? "완료" : "미완료"}
                                            />
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default HabitTable;
