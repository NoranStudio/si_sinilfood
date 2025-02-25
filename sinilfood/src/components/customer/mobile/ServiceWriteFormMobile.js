import React, { useState } from 'react';
import './CustomerMobile.css';

function ServiceWriteFormMobile({ onCancel, onSubmit }) {
    const [formData, setFormData] = useState({
        date: new Date().toISOString().split('T')[0],
        email: {
            id: '',
            domain: '',
            selectedDomain: '',
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

    return (
        <>
            <div className="service-write-form-container-mobile">
                <div className="service-write-form-mobile">
                    <div className="service-form-row-mobile">
                        <label>등록자</label>
                        <div className="service-input-container-mobile">
                            <input
                                type="text"
                                className="service-input-mobile"
                                placeholder="성명을 입력해주세요"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />
                        </div>
                    </div>

                    <div className="service-form-row-mobile">
                        <label>이메일</label>
                        <div className="service-email-input-group-mobile">
                            <input
                                type="text"
                                className="service-input-mobile"
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
                                className="service-input-mobile domain-input"
                                value={formData.email.domain}
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        email: { ...formData.email, domain: e.target.value },
                                    })
                                }
                            />
                            <div className="service-select-wrapper-mobile">
                                <select
                                    className="service-select-mobile domain-select"
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
                                <div className="service-select-arrow-mobile" />
                            </div>
                        </div>
                    </div>

                    <div className="service-form-row-mobile">
                        <label>연락처</label>
                        <div className="service-phone-input-group-mobile">
                            <div className="service-select-wrapper-mobile">
                                <select
                                    className="service-select-mobile"
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
                                <div className="service-select-arrow-mobile" />
                            </div>
                            <span>-</span>
                            <input
                                type="text"
                                className="service-input-mobile"
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
                                className="service-input-mobile"
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

                    <div className="service-form-row-mobile">
                        <label>제목</label>
                        <input
                            type="text"
                            className="service-input-mobile"
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        />
                    </div>

                    <div className="service-form-row-mobile">
                        <label>내용</label>
                        <textarea
                            className="service-textarea-mobile"
                            value={formData.content}
                            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                        />
                    </div>

                    <div className="service-form-row-mobile">
                        <label className="file-label">첨부{'\n'}파일</label>
                        <div className="service-file-input-group-mobile">
                            <input
                                type="text"
                                className="service-input-mobile"
                                readOnly
                                placeholder="선택된 파일이 없습니다"
                            />
                            <button className="service-file-button-mobile">파일선택</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-form-buttons-container-mobile">
                <div className="service-form-buttons-mobile">
                    <button className="service-submit-button-mobile" onClick={() => onSubmit(formData)}>
                        등록
                    </button>
                    <button className="service-cancel-button-mobile" onClick={onCancel}>
                        취소
                    </button>
                </div>
            </div>
        </>
    );
}

export default ServiceWriteFormMobile;
