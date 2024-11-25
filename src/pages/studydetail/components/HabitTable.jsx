import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../../../shared/api/API_URL';

function HabitTable({ habit }) {
    const [habitData, setHabitData] = useState(habit);

    const daysOfWeek = [
        { name: '월', key: 'monday' },
        { name: '화', key: 'tuesday' },
        { name: '수', key: 'wendnesday' },
        { name: '목', key: 'thursday' },
        { name: '금', key: 'friday' },
        { name: '토', key: 'saturday' },
        { name: '일', key: 'sunday' },
    ];

    const checkIcon = "/img/success_check.png";
    const uncheckIcon = "/img/fail_check.png";

    useEffect(() => {
        setHabitData(habit);
    }, [habit]);

    const toggleDayStatus = async (habitId, dayKey) => {
        const updatedData = habitData.map((item) => {
            if (item.id === habitId) {
                return {
                    ...item,
                    [dayKey]: !item[dayKey],
                };
            }
            return item;
        });
        console.log(updatedData);
        setHabitData(updatedData);

        try {
            const newValue = updatedData.find((item) => item.id === habitId)[dayKey];
            const response = await axios.patch(`${API_URL}/api/home/habitUpdate`, {
                habitId,
                dayKey,
                newValue,
            });
            console.log(response.data);
        } catch (error) {
            console.error("상태 업데이트 실패:", error);
            setHabitData(habitData);
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
                        {daysOfWeek.map((day) => (
                            <div key={day.key} className='habit-table-day-i'>{day.name}</div>
                        ))}
                    </div>
                    {habitData.map((habitItem) => (
                        <div className="habit-row" key={habitItem.id}>
                            <div className="habit-name">{habitItem.name}</div>
                            <div className="habit-status-container">
                                {daysOfWeek.map((day) => {
                                    const dayStatus = habitItem[day.key];
                                    return (
                                        <div key={day.key} className="habit-status"
                                            onClick={() => toggleDayStatus(habitItem.id, day.key)}
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
