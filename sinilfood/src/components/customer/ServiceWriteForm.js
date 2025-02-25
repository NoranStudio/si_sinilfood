import React, { useState } from 'react';
import './Customer.css';

function ServiceWriteForm({ onCancel, onSubmit }) {
    const [formData, setFormData] = useState({
        date: new Date().toISOString().split('T')[0],
        email: {
            id: '',
            domain: '',
            customDomain: '',
        },
        phone: {
            first: '',
            middle: '',
            last: '',
        },
        title: '',
        content: '',
        file: null,
    });

    const emailDomains = ['naver.com', 'gmail.com', 'daum.net', 'hanmail.net', 'nate.com', '직접입력'];
    const phoneFirstNumbers = ['010', '011', '016', '017', '018', '019'];

    const [showEmailSelect, setShowEmailSelect] = useState(true);
    const [showPhoneSelect, setShowPhoneSelect] = useState(true);

    return (
        <>
            <div className="service-write-form-container">
                <div className="service-write-form">
                    <div className="service-form-row">
                        <label>등록자</label>
                        <div className="service-input-container">
                            <input
                                type="text"
                                className="service-input"
                                placeholder="성명을 입력해주세요"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="service-form-row">
                        <label>이메일</label>
                        <div className="service-email-input-group">
                            <input
                                type="text"
                                className="service-input"
                                value={formData.email.id}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: { ...formData.email, id: e.target.value },
                                    })
                                }
                            />
                            <span>@</span>
                            <input
                                type="text"
                                className="service-input domain-input"
                                value={formData.email.domain}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: { ...formData.email, domain: e.target.value },
                                    })
                                }
                            />
                            <div className="service-select-wrapper">
                                <select
                                    className="service-select domain-select"
                                    value={formData.email.selectedDomain}
                                    onChange={(e) => {
                                        if (e.target.value === '직접입력') {
                                            setFormData({
                                                ...formData,
                                                email: {
                                                    ...formData.email,
                                                    domain: '',
                                                    selectedDomain: e.target.value,
                                                },
                                            });
                                        } else {
                                            setFormData({
                                                ...formData,
                                                email: {
                                                    ...formData.email,
                                                    domain: e.target.value,
                                                    selectedDomain: e.target.value,
                                                },
                                            });
                                        }
                                    }}
                                >
                                    <option value="">선택</option>
                                    {emailDomains.map((domain) => (
                                        <option key={domain} value={domain}>
                                            {domain}
                                        </option>
                                    ))}
                                </select>
                                <div className="service-select-arrow" />
                            </div>
                        </div>
                    </div>

                    <div className="service-form-row">
                        <label>연락처</label>
                        <div className="service-phone-input-group">
                            <div className="service-select-wrapper">
                                <select
                                    className="service-select"
                                    value={formData.phone.first}
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            phone: { ...formData.phone, first: e.target.value },
                                        })
                                    }
                                >
                                    <option value="">선택</option>
                                    {phoneFirstNumbers.map((num) => (
                                        <option key={num} value={num}>
                                            {num}
                                        </option>
                                    ))}
                                </select>
                                <div className="service-select-arrow" />
                            </div>
                            <span>-</span>
                            <input
                                type="text"
                                className="service-input"
                                maxLength="4"
                                value={formData.phone.middle}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        phone: { ...formData.phone, middle: e.target.value },
                                    })
                                }
                            />
                            <span>-</span>
                            <input
                                type="text"
                                className="service-input"
                                maxLength="4"
                                value={formData.phone.last}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        phone: { ...formData.phone, last: e.target.value },
                                    })
                                }
                            />
                        </div>
                    </div>

                    <div className="service-form-row">
                        <label>제목</label>
                        <input
                            type="text"
                            className="service-input service-input-full"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        />
                    </div>

                    <div className="service-form-row">
                        <label>내용</label>
                        <textarea
                            className="service-textarea"
                            value={formData.content}
                            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                        />
                    </div>

                    <div className="service-form-row">
                        <label>첨부파일</label>
                        <div className="service-file-input-group">
                            <input
                                type="text"
                                className="service-input"
                                readOnly
                                placeholder="선택된 파일이 없습니다"
                            />
                            <button className="service-file-button">파일선택</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-form-buttons-container">
                <div className="service-form-buttons">
                    <button className="service-submit-button" onClick={() => onSubmit(formData)}>
                        등록
                    </button>
                    <button className="service-cancel-button" onClick={onCancel}>
                        취소
                    </button>
                </div>
            </div>
        </>
    );
}

export default ServiceWriteForm;
