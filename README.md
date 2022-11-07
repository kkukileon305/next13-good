loading.tsx => layout안의 children을 둘러싼 Suspense의 fallback에 해당됨. page.tsx가 준비가 되지 않은 상태이거나 또는 하위 경로의 layout이 준비되지 않은 상태일 때 보여짐.

서버 컴포넌트와 클라이언트 컴포넌트를 분리해야 개발해야 하는 것 같다.

기존의 react에서 사용된 useState, useEffect와 같은 hook들은 클라이언트 컴포넌트에서만 사용 가능, 추가로 useSelectedLayoutSegment(해당하는 route의 url을 /를 기준으로 split한 배열의 첫번째 요소를 반환하는 hook)와 같은 편리한 훅들이 추가됨

클라이언트 컴포넌트에서 use훅과 함께 데이터를 fetch할 때 무한히 요청하는 오류가 나는데 버그인 것 같아서 fetch는 서버 컴포넌트에서만 하도록 우회함.
