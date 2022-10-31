import React from "react-router-dom";
import styled from 'styled-components';

// 스타일
const StyledPrivacy = styled.div`
    width: 100%;
    padding: 10px 12px 15px 12px;
    .list{
    list-style: none;
    }
    
`;

const Privacy = () => {
    return (
        <StyledPrivacy>
            <h3>개인정보처리방침</h3>
            <hr />
            <ul className="list">
            <p>회사(이하 "SASHOE" 또는 "서비스")는 서비스를 제공함에 있어 이용자의 개인정보보호를 중요하게 생각하며, 본 개인정보처리방침을 통하여 이용자의 개인정보 처리 현황을 알려드립니다.</p>
            <p>&nbsp;</p>
            <p><strong>1. 수집하는 개인정보의 항목 및 수집 방법</strong></p>
            <p>"SASHOE"은 회원가입, 원활한 고객 상담, 각종 서비스의 제공을 위해 최초 이용시 필요한 개인정보를 수집하고 있습니다.<br />
                <br/>회원가입 시점에 이용자로부터 수집하는 개인정보는 아래와 같습니다.</p>
            <p> 1) 회원 가입 시에 이름, 휴대전화번호, 성별, 생년월일, CI/DI, 이메일 주소(로그인ID), 비밀번호를 필수 항목으로 수집하며, 선택항목으로 별명, 프로필 사진, 신발 사이즈, 배송 주소, 카드 정보, 거래은행 및 계좌번호를 수집합니다.</p>
            <br />2) 네이버 아이디로 로그인 시에는 이용자 고유 식별자를 필수 항목으로 수집하고, 이메일 주소, 이름(별명), 프로필 사진을 선택 항목으로 수집합니다.<br />
            <br />3) 애플 아이디로 로그인 시에는 이용자 고유 식별자를 필수 항목으로 수집하고, 이메일 주소를 선택 항목으로 수집합니다.<br />
            <br />4) 이벤트 진행 및 경품 배송, 제세공과금 처리를 위해 아래의 정보를 수집할 수 있습니다.
            <ul><li>이벤트 참여: (필수) 이름, 휴대전화번호</li><li>경품 배송: (필수) 이름, 주소, 휴대전화번호</li><li>제세공과금 처리: (필수) 이름, 주소, 휴대전화번호, 고유식별정보(주민등록번호 등)</li></ul>
            <p><br />5) 매입 / 매입・매출 거래처 등록을 위하여 아래의 정보를 수집할 수 있습니다.</p><ul><li>개인: (필수) 이름, 주소, 휴대전화번호, 이메일, 입금계좌 정보(계좌번호, 예금주명), 신분증 사본</li><li>사업자: (필수) 이름, 주소, 휴대전화번호, 이메일, 입금계좌 정보(계좌번호, 예금주명), 사업자등록증, 입금계좌 신고서</li></ul>
            <br />6) 서비스를 이용하면서 이용 문의를 하거나, 권리 침해 신고를 접수하는 경우에는 문의 접수 및 해결 과정에서 이메일, (휴대)전화번호를 수집할 수 있습니다.<br />
            <br />7) 모바일 서비스 특성상 단말기에 관한 정보(단말기 모델, 이동통신사 정보, OS, 하드웨어 ID, ADID, 접속IP, 서비스 이용에 대한 기본 통계)가 자동으로 수집될 수 있으나, 이는 개인을 식별할 수 없는 형태입니다.<br />
            <br />8) 이 외에도 추가적으로 로그 정보, 서비스 이용기록, 앱 설치 정보 등이 수집될 수 있으며, 회사는 14세 미만 이용자의 개인정보를 수집하지 않습니다.<br /><p>&nbsp;</p>
            <p>회사는 아래의 방법을 통해 개인정보를 수집합니다.</p>
            <p>1) 회원가입이나 서비스 이용 과정에서 이용자가 직접 제공하고 동의하는 경우, 해당 개인정보를 수집합니다.<br />
                <br />2) 고객센터를 통한 상담 과정이나 이벤트 응모 과정 등에서 웹/앱 페이지, 메일, 팩스, 전화, 서면 등을 통해 이용자의 개인정보가 수집될 수 있습니다.<br />
                <br />3) 기기정보와 같은 생성정보는 서비스 이용과정에서 자동으로 생성되어 수집될 수 있습니다.</p><p>&nbsp;</p>
            <p><strong>2. 개인정보의 수집 및 이용 목적</strong></p>
            <p>회사는 수집한 개인정보를 다음과 같은 목적으로만 이용합니다.</p>
            <p>1) 회원가입 의사의 확인, 이용자 본인확인, 이용자 식별, 회원탈퇴 의사의 확인 등 회원관리를 위해 개인정보를 이용합니다.<br />
                <br />2) 콘텐츠 등 기존 서비스 제공(광고 포함)에 더하여, 인구통계학적 분석, 서비스 방문 및 이용기록의 분석, 개인정보 및 관심에 기반한 이용자간 관계의 형성, 지인 및 관심사 등에 기반한 맞춤형 서비스 제공 등 신규 서비스 요소의 발굴 및 기존 서비스 개선 등을 위하여 개인정보를 이용합니다.<br />
                <br />3) 법령 및 이용약관을 위반하는 회원에 대한 이용 제한 조치, 부정 이용 행위를 포함하여 서비스의 원활한 운영에 지장을 주는 행위에 대한 방지 및 제재, 계정 도용 및 부정거래방지, 약관 개정 등의 고지사항 전달, 분쟁조정을 위한 기록 보존, 민원처리 등 이용자 보호 및 서비스 운영을 위하여 개인정보를 이용합니다.<br />
                <br />4) 유료 서비스 제공에 따르는 본인인증, 구매 및 요금 결제, 상품 및 서비스의 배송을 위하여 개인정보를 이용합니다.<br />
                <br />5) 이벤트 진행 및 경품 배송, 제세공과금 처리를 위해개인정보를 이용합니다.<br />
                <br />6) 거래처 등록 및 대금 지급을 위해 개인정보를 이용합니다.<br />
                <br />7) 광고성 정보 제공 등 마케팅 및 프로모션 목적으로 개인정보를 이용합니다.<br />
                <br />8) 서비스 이용 기록과 접속 빈도 분석, 서비스 이용에 대한 통계, 서비스 분석 및 통계에 따른 맞춤 서비스 제공과 광고 게재 등에 개인정보를 이용합니다.<br />
                <br />9) 보안, 프라이버시, 안전 측면에서 이용자가 안심하고 이용할 수 있는 서비스 이용환경 구축을 위해 개인정보를 이용합니다.</p><p>&nbsp;</p>
            <p><strong>3. 개인정보의 처리 위탁</strong></p>
            <p>회사는 원칙적으로 이용자 동의 없이 개인정보를 외부에 제공하지 않습니다.<br />다만, 이용자들이 개인정보 제공에 사전에 동의한 경우, 관련 법령에 의해 개인정보 제출 의무가 발생한 경우에는 개인정보가 제공될 수 있습니다.<br />
                <br />"SASHOE"은 회원님에게 서비스를 제공하는 데에 반드시 필요한 업무 중 일부를 외부 업체에 위탁하고 있습니다.<br />
                <br />외부 업체에 업무 위탁 시 계약서 등을 통해서 개인정보보호 관련 법규의 준수, 개인정보에 관한 비밀유지, 제3자 제공에 대한 금지, 사고 시의 책임 부담, 위탁 기간, 처리 종료 후의 개인정보의 파기 등을 규정하고, 이를 준수하도록 관리 감독하고 있습니다.<br />&nbsp;</p>
            <p><strong>4. 개인정보의 보유 및 이용기간</strong></p>
            <p>"SASHOE"은 회원님에게 서비스를 제공하는 데에 반드시 필요한 업무 중 일부를 외부 업체에게 위탁하여 수행하고 있습니다.</p>
            <p>회사는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 이용자의 개인정보를 지체없이 파기합니다.<br />단, 회사 내부방침이나 관계법령의 규정에 의하여 보존할 필요가 있는 경우에는 아래와 같이 일정 기간 동안 개인정보를 보관할 수 있습니다</p>
            <p>1) 법령 기준에 따라 별도 보관하는 경우<br />
                <br />① 전자상거래 등에서 소비자 보호에 관한 법률</p>
            <ul><li>계약 또는 청약철회 등에 관한 기록: 5년 보관</li>
                <li>대금결제 및 재화 등의 공급에 관한 기록: 5년 보관</li>
                <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년 보관</li></ul>
            <p><br />② 통신비밀보호법</p>
            <ul><li>접속 로그 기록: 3개월</li></ul>
            <p><br />2) 내부 기준에 따라 별도 보관하는 경우</p><ul><li>부정이용 방지를 위해 이름, 이메일(로그인ID), 휴대전화번호, CI/DI: 3년</li><li>이벤트 진행 및 경품 배송, 제세공과금 처리를 위해 이름, 주소, 휴대전화번호: 3개월</li><li>거래처 등록 및 대금 지급을 위해 거래처 등록서류, 입금계좌 정보: 정보 확인 및 거래처 등록 후 3개월<br />&nbsp;</li></ul><p>회사의 개인정보 파기 절차 및 방법은 다음과 같습니다.</p>
            <p>1) 파기 절차</p><ul><li>이용자가 서비스 이용 등을 위해 입력한 정보는 이용 목적이 달성된 후, 내부 방침 및 관련 법령에 따라 일정 기간 저장된 후 파기됩니다.</li><li>해당 개인정보는 법률에 의한 경우가 아니고서는 보관되는 목적 외로 이용되지 않습니다.</li></ul>
            <p><br />2) 파기 방법</p>
            <ul><li>종이에 출력된 개인정보는 분쇄기로 분쇄하고, 전자적 파일 형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.</li></ul><p>&nbsp;</p>
            <p><strong>5. 이용자 및 법정대리인의 권리와 행사 방법</strong></p>
            <p>이용자 및 법정대리인은 언제든지 자신의 개인정보를 조회하거나 수정할 수 있으며, 언제든지 계정 삭제를 요청할 수 있습니다.</p>
            <p>이용자가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다.<br />또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체 없이 통지하여 정정이 이루어지도록 하겠습니다.</p>
            <p>회사는 이용자의 요청에 의해 해지 또는 삭제된 개인정보를 아래 "개인정보의 보유 및 이용기간"에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.</p><p>&nbsp;</p>
            <p><strong>6. 개인정보의 기술적 관리적 보호조치</strong></p>
            <p>"SASHOE"는 이용자들의 개인정보를 처리함에 있어 개인 정보가 분실, 도난, 유출, 변조 또는 훼손되지 않도록 안전성 확보를 다음과 같은 기술적·관리적 대책을 강구하고 있습니다.</p>
            <p>1) 이용자의 개인정보는 암호화하여 저장·관리되고 있으며, 암호화 통신(SSL) 등을 통하여 전송하고, 비밀번호는 복호화 불가능하도록 일방향 암호화하여 저장·관리되고 있습니다.<br />
                <br />2) 해킹이나 컴퓨터 바이러스 등에 의해 이용자의 개인정보가 유출되거나 훼손되는 것을 막기 위해 외부로부터 접근이 통제된 구역에 시스템을 설치하고 있습니다.<br />
                <br />3) 개인정보의 훼손에 대비해서 자료를 수시로 백업하고, 최신 백신프로그램을 이용하여 이용자들의 개인정보나 자료가 유출되거나 손상되지 않도록 방지하고 있으며, 암호화 통신(SSL) 등을 통하여 네트워크상에서 개인정보를 안전하게 전송할 수 있도록 하고 있습니다.<br />
                <br />4) 침입차단시스템을 이용하여 외부로부터의 무단 접근을 통제하고 있으며, 기타 시스템적으로 보안성을 확보하기 위한 가능한 모든 기술적 장치를 갖추려고 노력하고 있습니다.<br />
                <br />5) 개인정보를 처리하는 직원을 최소화 하여 개인정보 유출에 대한 위험을 줄이고 있습니다.<br />
                <br />6) 개인정보를 보관하는 데이터베이스 시스템과 개인정보를 처리하는 시스템에 대한 비밀번호의 생성과 변경, 그리고 접근할 수 있는 권한에 대한 체계적인 기준을 마련하고 지속적인 감사를 실시하고 있습니다.<br />
                <br />7) 개인정보를 처리하는 임직원들을 대상으로 개인정보보호 의무와 보안에 대한 정기적인 교육이나 캠페인을 실시하고 있습니다.</p><p>&nbsp;</p>
            <p><strong>7. 개인정보보호 책임자 및 연락처</strong></p>
            <p>개인정보보호 책임자</p>
            <ul><li>이름: 이수빈</li><li>직위: 리드</li><li>메일: sashoe_service_privacy@kreamcorp.com</li></ul>
            <p>기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.</p><ul><li>개인정보침해신고센터(https://privacy.kisa.or.kr / 국번없이 118)</li><li>개인정보 분쟁조정위원회(https://kopico.go.kr / 국번없이 1833-6972)</li>
                <li>대검찰청 사이버수사과(https://cybercid.spo.go.kr / 국번없이 1301)</li>
                <li>경찰청 사이버안전국(https://cyberbureau.police.go.kr / 국번없이 182)</li>
            </ul><p>&nbsp;</p>
            <p><strong>8. 개인정보 처리방침의 개정</strong></p>
            <p>본 개인정보처리방침의 내용 추가, 삭제 및 수정이 있을 시에는 개정 최소 7일전부터 ‘공지사항’을 통해 사전 공지하겠으며, 필요 시 이용자 동의를 다시 받을 수도 있습니다.</p>
            <p>&nbsp;</p>
            <p>2021년 10월 07일 공고<br />2021년 10월 14일 시행</p>
            </ul>
        </StyledPrivacy>
    );
}
export default Privacy;