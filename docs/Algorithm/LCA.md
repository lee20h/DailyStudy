  
 
  

# LCA

Lowest Common Ancestor(LCA) 즉, 최소 공통 조상을 구하는 알고리즘이다. 두 정점 u,v에서 가장 가까운 공통 조상을 찾는 과정이다.  

![이진 트리](https://ww.namu.la/s/80babca3318fe49e11009da782d4a7b3969bf17517764fe7dab69b05e0477ba3f057a995cd00c2434b4c964cd08ba76267c879cea21db822565ccd8a50252daee99e6b62a7fb63565a921230025be77d5a1f4090a56fb8a80dd67b6fbad32c6e)  

ex) LCA(2,6) = 7, LCA(6,11) = 6, LCA(5,4) = 2  
이런 식으로 노드들의 가장 가까운 위치의 공통 조상을 찾는 알고리즘이다. 또한, 두 노드의 가장 가까운 거리를 찾는다는 의미도 있어서 노드간 거리를 찾을 때도 사용된다.

## 구현 방법

구현 방법으로는 Loop을 이용한 방법과 이전에 공부했던 자료구조인 세그먼트 트리를 이용하는 방법과 DP를 이용하는 방법 3가지로 나눠서 봐보자.  

### Loop를 이용한 방법

먼저 다른 그래프 문제를 풀이하듯 트리구조를 생성해준다. 만일 root가 문제에서 주어진 경우 따로 기억해야한다.  

배열 두 개를 선언해주는데 이때 하나는 노드의 부모노드를 저장해주는 `parent` 배열이고 다른 하나는 깊이를 저장해줄 `depth` 배열이다.  
이후 DFS을 통해 root로부터 각각의 노드들의 parent와 depth을 저장해준다.  

이후 문제에서 주어진 조건을 보자. 두 노드가 주어지면 각각의 depth을 구한다. 두 노드 중 depth가 깊은 노드를 얉은 노드에 깊이만큼 맞춰준다. depth을 같게 맞춰주었는데도 공통 조상을 찾지 못했다면, 두 노드를 동시에 한 칸씩 끌어올리게 된다. 이러한 반복을 통해서 LCS 즉, 최소 공통 조상을 찾게 된다.

### DP 이용하는 방법

Loop로 LCA를 구할 때는 트리의 크기가 작을 때는 시간이 크게 걸리지 않지만 트리의 크기가 커질수록 시간은 부담이 된다. 따라서 시간을 줄일 수 있는 방법인 DP를 이용한 방법에 대해 알아보자.  

먼저 방법에 대해 크게 살펴보면 Loop에서 취한 방법은 모든 노드들의 부모를 다 체크해서 찾아가는 방법이였다. 이 부분을 효율적으로 탐색하기 위해 조상들을 접어서 탐색하는 방법을 취했다. 예를 들어 조상과 노드의 거리가 100이라고 가정시에 `100 = 2^6 + 2^5 + 2^2` 이런 식과 같이 3번의 접근으로 조상을 찾는 방법을 이용했다.  

DP를 통해서 각 노드들의 조상 정보를 저장하게 되는데, 이때 각 노드들의 부모를 먼저 저장하고 부모의 정보를 이용해서 두 단계 앞의 조상을 구한다. 두 단계 앞의 조상을 이용해 네 단계 앞 조상의 정보를 구하고 또 여덟 단계 앞 조상을 구할 수 있다. 이런식으로 나아가게 되면 해당 노드로부터 `2ⁿ`에 해당하는 조상들의 정보를 완성시켜서 이용할 수 있게 된다.  

이후에는 LCA를 구하는 과정을 통하면 된다. 이미 완성된 조상들의 정보로 Loop를 이용한 방식과 같이 얉은 깊이를 기준으로 동일시하게 만든 뒤 조상을 찾아가는 방법이다. 하지만 위치를 조정할 때는 깊이의 차이보다 작은 2ⁿ의 숫자 중 가장 큰 수를 선택하여 그 만큼 위치를 조정시켜준다. 차이가 아직 존재한다면 앞과 똑같이 반복한다.  

그 후 두 노드의 깊이가 같게 되어서 만나게 되면 해당 노드가 LCA가 되는 것이고 만나지 못한다면, 다시 조상노드를 찾기 위해 올라가기를 반복한다. 이때 Loop를 이용한 방법과 다른 점은 조상노드를 찾기 위해 올라갈 때 해당 노드 직전까지만 올라간다는 차이점이 있다. 따라서 두 노드의 부모를 선택하면 그 값이 LCA 즉 최소 공통 조상이 된다. 이러하게 하는 이유는 두 노드의 공통 조상을 찾을 때 가질 수 있는 최대 조상부터 계산을 시작하면, 루트 노드이든 다른 어떤 노드든 가질 수 있는 공통 조상중 가장 깊이가 얕은 조상을 선택할 가능성이 있기 때문이다.  

### 세그먼트 트리를 이용한 방법

세그먼트 트리는 노드들의 값에 해당 자식들에 해당하는 범위만큼의 합과 같은 연산을 통한 값을 저장해놓은 자료구조다. LCA를 구할 때는 작은 값을 찾는 세그먼트 트리로 변형해서 찾아보도록 한다.  

트리를 전순위 탐색하여 탐색순으로 세그먼트 리프노드에 (트리의 높이, 노드번호)를 갱신해준다. 이때 배열에 각 트리의 노드에 해당하는 세그먼트 리프 노드 번호를 기록한다.  

자식노드에서 부모노드로 돌아왔을 때 다시 세그먼트 리프에 (트리높이, 부모노드번호)를 삽입해준다. 리프 노드 번호를 기록할 필요 없다.  

발견된 순서에 따른 쿼리를 통해 두 노드의 LCA 즉, 최소 공통 조상을 구할 수 있다.  