Search.setIndex({docnames:["api","cugraph_blogs","cugraph_intro","cugraph_ref","dask-cugraph","index","nx_transition"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,nbsphinx:3,sphinx:56},filenames:["api.rst","cugraph_blogs.rst","cugraph_intro.md","cugraph_ref.rst","dask-cugraph.rst","index.rst","nx_transition.rst"],objects:{"cugraph.centrality":{betweenness_centrality:[0,0,0,"-"],katz_centrality:[0,0,0,"-"]},"cugraph.centrality.betweenness_centrality":{betweenness_centrality:[0,1,1,""],edge_betweenness_centrality:[0,1,1,""]},"cugraph.centrality.katz_centrality":{katz_centrality:[0,1,1,""]},"cugraph.comms":{comms:[0,0,0,"-"]},"cugraph.comms.comms":{destroy:[0,1,1,""],initialize:[0,1,1,""]},"cugraph.community":{ecg:[0,0,0,"-"],egonet:[0,0,0,"-"],ktruss_subgraph:[0,0,0,"-"],leiden:[0,0,0,"-"],louvain:[0,0,0,"-"],spectral_clustering:[0,0,0,"-"],subgraph_extraction:[0,0,0,"-"],triangle_count:[0,0,0,"-"]},"cugraph.community.ecg":{ecg:[0,1,1,""]},"cugraph.community.egonet":{batched_ego_graphs:[0,1,1,""],ego_graph:[0,1,1,""]},"cugraph.community.ktruss_subgraph":{k_truss:[0,1,1,""],ktruss_subgraph:[0,1,1,""]},"cugraph.community.leiden":{leiden:[0,1,1,""]},"cugraph.community.louvain":{louvain:[0,1,1,""]},"cugraph.community.spectral_clustering":{analyzeClustering_edge_cut:[0,1,1,""],analyzeClustering_modularity:[0,1,1,""],analyzeClustering_ratio_cut:[0,1,1,""],spectralBalancedCutClustering:[0,1,1,""],spectralModularityMaximizationClustering:[0,1,1,""]},"cugraph.community.subgraph_extraction":{subgraph:[0,1,1,""]},"cugraph.community.triangle_count":{triangles:[0,1,1,""]},"cugraph.components":{connectivity:[0,0,0,"-"]},"cugraph.components.connectivity":{connected_components:[0,1,1,""],strongly_connected_components:[0,1,1,""],weakly_connected_components:[0,1,1,""]},"cugraph.cores":{core_number:[0,0,0,"-"],k_core:[0,0,0,"-"]},"cugraph.cores.core_number":{core_number:[0,1,1,""]},"cugraph.cores.k_core":{k_core:[0,1,1,""]},"cugraph.dask.centrality":{katz_centrality:[0,0,0,"-"]},"cugraph.dask.centrality.katz_centrality":{call_katz_centrality:[0,1,1,""],katz_centrality:[0,1,1,""]},"cugraph.dask.common":{read_utils:[0,0,0,"-"]},"cugraph.dask.common.read_utils":{get_chunksize:[0,1,1,""]},"cugraph.dask.community":{louvain:[0,0,0,"-"]},"cugraph.dask.community.louvain":{call_louvain:[0,1,1,""],louvain:[0,1,1,""]},"cugraph.dask.link_analysis":{pagerank:[0,0,0,"-"]},"cugraph.dask.link_analysis.pagerank":{pagerank:[0,1,1,""]},"cugraph.dask.traversal":{bfs:[0,0,0,"-"],sssp:[0,0,0,"-"]},"cugraph.dask.traversal.bfs":{bfs:[0,1,1,""],call_bfs:[0,1,1,""]},"cugraph.dask.traversal.sssp":{call_sssp:[0,1,1,""],sssp:[0,1,1,""]},"cugraph.layout":{force_atlas2:[0,0,0,"-"]},"cugraph.layout.force_atlas2":{force_atlas2:[0,1,1,""]},"cugraph.linear_assignment":{hungarian:[0,0,0,"-"]},"cugraph.link_analysis":{hits:[0,0,0,"-"],pagerank:[0,0,0,"-"]},"cugraph.link_analysis.hits":{hits:[0,1,1,""]},"cugraph.link_analysis.pagerank":{pagerank:[0,1,1,""]},"cugraph.link_prediction":{jaccard:[0,0,0,"-"],overlap:[0,0,0,"-"],wjaccard:[0,0,0,"-"],woverlap:[0,0,0,"-"]},"cugraph.link_prediction.jaccard":{jaccard:[0,1,1,""],jaccard_coefficient:[0,1,1,""]},"cugraph.link_prediction.overlap":{overlap:[0,1,1,""],overlap_coefficient:[0,1,1,""]},"cugraph.link_prediction.wjaccard":{jaccard_w:[0,1,1,""]},"cugraph.link_prediction.woverlap":{overlap_w:[0,1,1,""]},"cugraph.sampling":{random_walks:[0,0,0,"-"]},"cugraph.sampling.random_walks":{random_walks:[0,1,1,""],rw_path:[0,1,1,""]},"cugraph.structure":{convert_matrix:[0,0,0,"-"],symmetrize:[0,0,0,"-"]},"cugraph.structure.convert_matrix":{from_adjlist:[0,1,1,""],from_cudf_edgelist:[0,1,1,""],from_edgelist:[0,1,1,""],from_numpy_array:[0,1,1,""],from_numpy_matrix:[0,1,1,""],from_pandas_adjacency:[0,1,1,""],from_pandas_edgelist:[0,1,1,""],to_numpy_array:[0,1,1,""],to_numpy_matrix:[0,1,1,""],to_pandas_adjacency:[0,1,1,""],to_pandas_edgelist:[0,1,1,""]},"cugraph.structure.graph_classes":{Graph:[0,2,1,""]},"cugraph.structure.graph_classes.Graph":{Properties:[0,2,1,""],add_internal_vertex_id:[0,3,1,""],add_nodes_from:[0,3,1,""],clear:[0,3,1,""],from_cudf_adjlist:[0,3,1,""],from_cudf_edgelist:[0,3,1,""],from_dask_cudf_edgelist:[0,3,1,""],from_numpy_array:[0,3,1,""],from_numpy_matrix:[0,3,1,""],from_pandas_adjacency:[0,3,1,""],from_pandas_edgelist:[0,3,1,""],has_isolated_vertices:[0,3,1,""],is_bipartite:[0,3,1,""],is_directed:[0,3,1,""],is_multigraph:[0,3,1,""],is_multipartite:[0,3,1,""],is_renumbered:[0,3,1,""],is_weighted:[0,3,1,""],lookup_internal_vertex_id:[0,3,1,""],to_directed:[0,3,1,""],to_undirected:[0,3,1,""],unrenumber:[0,3,1,""]},"cugraph.structure.symmetrize":{symmetrize:[0,1,1,""],symmetrize_ddf:[0,1,1,""],symmetrize_df:[0,1,1,""]},"cugraph.traversal":{bfs:[0,0,0,"-"],sssp:[0,0,0,"-"],traveling_salesperson:[0,0,0,"-"]},"cugraph.traversal.bfs":{bfs:[0,1,1,""],bfs_edges:[0,1,1,""]},"cugraph.traversal.sssp":{filter_unreachable:[0,1,1,""],shortest_path:[0,1,1,""],shortest_path_length:[0,1,1,""],sssp:[0,1,1,""]},"cugraph.traversal.traveling_salesperson":{traveling_salesperson:[0,1,1,""]},"cugraph.tree":{minimum_spanning_tree:[0,0,0,"-"]},"cugraph.tree.minimum_spanning_tree":{minimum_spanning_tree:[0,1,1,""]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method"},terms:{"0":[0,1,6],"000":0,"00001":0,"01":0,"019":0,"0476":0,"05":0,"05578":0,"06":0,"0605087":3,"0803":0,"0e":0,"0f":0,"1":[0,1,3,6],"10":[0,3],"100":[0,6],"1000":[0,6],"100000":0,"1000x":2,"1013470632383":0,"1023":0,"1038":0,"1109":[0,3],"136":3,"145":3,"14th":6,"16":[0,6],"163":3,"1736":2,"177":3,"1809":0,"1977":3,"1e":[0,4],"2":[3,4,5,6],"2001":[0,3],"2003":3,"2006":3,"2007":3,"2008":[0,3],"2014":[0,3],"2016":3,"2017":[0,3],"2018":3,"2019":[0,5],"2020":[3,5,6],"2021":5,"23rd":3,"25":3,"275":0,"2d":0,"2k":0,"3":[0,6],"30":[0,3],"32b":0,"33":3,"396":3,"4":[0,1,3,4],"405":3,"41695":0,"452":3,"473":3,"5":0,"50":0,"500":0,"52":3,"5233":0,"54":3,"57":3,"6":0,"61":3,"64":0,"7":0,"72":3,"8":3,"8091038":[0,3],"85":[0,3],"9":0,"92":3,"boolean":0,"break":2,"case":[0,2],"class":0,"default":[0,6],"do":[0,5],"final":0,"float":0,"function":[2,4,5],"import":[0,4,6],"int":0,"long":3,"new":[0,2,6],"return":[5,6],"short":0,"static":2,"switch":[0,2],"true":[0,4],"try":[0,2,6],"while":[0,6],A:[0,1,3],And:1,As:0,At:2,But:[0,6],By:0,For:[0,2,6],If:[0,4,6],In:[0,1,2,3,6],It:[0,6],NOT:0,No:0,Not:0,On:3,One:6,That:[0,6],The:[0,1,2,3,4,6],To:[0,2,6],With:4,__1:0,__2:0,__:0,_column_nam:0,a100:[1,3],ab:0,abil:2,abl:4,abov:[0,2,6],absenc:0,academ:5,acceler:[1,2,3,5],accept:[0,6],accuraci:0,achiev:[0,6],acm:3,across:[0,4],actual:0,ad:[0,6],add:[0,1],add_edg:6,add_internal_vertex_id:0,add_nodes_from:0,addit:5,adjac:0,after:0,against:[0,2],agenc:[0,3],aggregate_segment_offset:0,ai:[0,1,3],al:[0,3],algorithm:[0,1,2,5],alia:0,all:[0,1,2,4,5],alloc:[0,6],allow:[0,2,6],almost:2,along:0,alpha:0,alpha_max:0,alreadi:0,also:[0,2,4,6],alwai:[0,2],among:2,amount:[0,6],an:[0,2,3,6],analysi:[1,2,3,5,6],analyt:[2,5,6],analyz:[0,4],analyzeclustering_edge_cut:0,analyzeclustering_modular:0,analyzeclustering_ratio_cut:0,ani:[0,2,6],anoth:2,answer:[0,2],anthropolog:3,api:[5,6],appear:0,applic:[0,2,3],approach:2,appropri:0,approxim:0,ar:[0,1,2,5],arbitrari:0,arbitrarili:0,architectur:[0,2,5],area:2,argot:2,argument:[0,5],around:0,arrai:[0,6],arxiv:0,ascend:0,assign:[3,5,6],associ:[0,3],assourc:0,assumpt:0,atla:[5,6],attach:0,attempt:2,attenu:0,attract:0,attribut:[0,5],austin:3,author:0,automat:[0,4],avail:4,averag:2,avoid:6,awai:0,b:[1,3],bader:3,balanc:0,barn:0,barnes_hut_optim:0,barnes_hut_theta:0,base:[0,2,4],batched_ego_graph:0,bc:0,beam:0,beam_search:0,been:2,befor:[0,6],begin:0,behavior:[0,3],being:[0,2,6],believ:0,belong:0,benson:3,best:[2,6],beta:[0,6],better:[0,2,6],between:[2,3,5,6],betweenness_centr:0,beyond:1,bf:[0,6],bfs_edg:0,biggest:6,billion:[0,2,4],biologi:2,bipartit:[0,6],bit:0,block:[0,6],blog:[5,6],blondel:0,boisseau:3,bool:0,border:0,boruvka:0,both:[0,2,6],bottlenos:3,brand:3,breadth:[2,5,6],bridg:2,build:[0,5],built:6,bulk:6,busato:[0,3],c:[0,1,2,3],calcul:0,call:[0,2,6],call_bf:0,call_katz_centr:0,call_louvain:0,call_sssp:0,callback:0,caller:0,came:2,can:[0,4,6],cell:1,center:0,central:[3,5,6],chang:[0,2,6],check:0,choos:2,chunk:4,chunksiz:[0,4],citi:0,clean:[0,4,6],clear:0,client:[0,4],climb:0,cliqu:0,close:[0,4],cluster:[1,3,4,5,6],cluster_col_nam:0,cmu:3,cn:0,cnx:6,coalesc:0,code:[0,1,6],coeffici:[1,5,6],cohen:[0,3],cohes:[0,3],collect:2,column:[0,6],column_nam:0,com:[1,3],comfort:4,comm:[0,4],common:0,commonli:2,commun:[3,5],compar:0,compat:[0,1,5],complet:6,complex:[0,2],complic:6,compon:[5,6],comput:[0,1,2,3,4,6],computation:0,conatain:0,confer:[0,3],configur:0,conflict:3,connect:[5,6],connected_compon:0,consid:[0,6],consist:[0,2],construct:[0,6],conta:0,contain:0,content:0,context:0,continu:0,contrast:0,control:0,converg:0,convers:5,convert:0,convert_matrix:0,coo:0,coo_matrix:0,copi:[0,5],copy_to_host:0,copyright:1,core:[3,5,6],core_numb:0,corpor:1,correct:0,correspond:0,cost:0,count:[3,5,6],cover:2,crawl:[1,3],creat:[0,6],create_us:0,cross:0,cs:3,csgraph:0,csr:0,csv:[0,4],cuda:[1,2,4],cudf:0,cugraph:6,cupi:[0,2],current:[0,4,6],customcallback:0,cut:0,cyber:2,cycl:0,d:3,damp:0,dangl:0,dask:[2,4,5],dask_cuda:4,dask_cudf:[0,4],dask_cugraph:[0,4],data1:0,data2:0,data:[0,1,2,4,5,6],data_fil:6,datafram:[0,2,6],dataset:[0,4],date:3,david:3,dawson:3,dcg:0,ddf:0,de:2,deeper:1,def:0,defin:0,degre:0,degree_max:0,delimit:[0,4],demand:0,denot:0,dens:0,densif:3,depend:0,depth:0,depth_limit:0,dereferenc:0,descreas:0,describ:[0,2],descript:0,descriptor:0,desir:0,dest:0,dest_col:0,destin:[0,4],destroi:[0,4],detail:0,determin:0,develop:2,df:[0,6],dg:0,dgx:[1,3],di:0,diagon:0,diamet:3,dict:0,dictionari:[0,6],differ:[0,5],dig:0,digraph:[0,1,4,6],direct:0,directli:0,disabl:0,discourag:0,discoveri:3,disjoint:0,distanc:[0,6],distant:0,distribut:[0,5],dive:1,divid:0,doc:0,document:2,doe:[0,2,6],doi:[0,3],dolphin:3,domin:0,don:0,done:[0,4],doubl:0,doubt:3,down:[0,2],drift:0,drop:0,dst:[0,4],dst_name:0,dtype:[0,4],due:0,duplic:0,dynam:2,e:[0,2,3,6],e_list:4,each:[0,2],earli:[0,2],eas:2,easi:5,easier:6,easili:2,eaton:[1,3],ebc:0,ebunch:0,ecg:[5,6],eck:0,ecolog:3,ecosystem:2,edg:[0,2,6],edge_attr:0,edge_betweenness_centr:0,edge_list:0,edge_weight_influ:0,edge_weight_path:0,edgelist:0,edgeweight:0,edu:3,effici:6,eg:0,ego_edge_list:0,ego_graph:0,egonet:5,eigensolv:0,eigenvalu:0,eigenvector:[0,3],either:[0,6],element:[0,2,6],els:0,email:3,emerg:2,empti:0,enabl:0,encourag:6,endpoint:[0,6],engin:2,enough:0,ensembl:[5,6],ensemble_s:0,ensur:0,entir:0,epsilon:0,equal:0,equival:0,error:0,estim:0,et:[0,3],etc:6,etl:[2,6],eu:3,euler:2,even:2,everi:0,evolut:3,evs_max_it:0,evs_toler:0,exact:0,exactli:[0,5],examin:0,exampl:[2,5,6],exce:0,except:0,exclud:0,execut:[0,6],exist:[0,6],exit:0,expans:6,expect:0,extern:0,external_column_nam:0,extra:0,extract:[5,6],extrem:[0,3],f:[0,3],fact:0,facto:2,factor:[0,2],fairli:0,faloutso:3,fals:0,familiar:2,far:4,fast:[0,3],faster:[2,3],favor:2,feasibl:0,featur:[1,3,4],fender:[1,3],few:[1,2,6],fewer:0,field:2,fill:0,filter:0,filter_unreach:0,find:[0,3],fine:6,first:[2,5,6],fission:3,fit:[0,4],fix:6,fixm:0,flesh:6,flexibl:4,float32:0,float64:0,flow:3,focu:2,focus:2,follow:[0,6],forc:[5,6],force_atlas2:0,forceatlas2:0,forest:0,format:5,formula:0,foster:0,found:0,foundat:2,fox:[0,3],frame:0,framework:2,free:0,from:[1,3,4,5,6],from_adjlist:0,from_cudf_adjlist:0,from_cudf_edgelist:0,from_dask_cudf_edgelist:[0,4],from_edgelist:0,from_numpy_arrai:0,from_numpy_matrix:0,from_pandas_adjac:0,from_pandas_edge_list:0,from_pandas_edgelist:0,fulfil:0,full:0,fulli:6,further:0,g:[0,2,4,6],g_ego:0,g_mst:0,g_truss:0,gamma:0,gdf:0,gdf_column:0,gener:[0,3,6],genom:1,get:[0,4],get_chunks:[0,4],get_column_nam:0,get_two_hop_neighbor:0,give:0,given:0,gleich:3,global:0,goal:[2,6],good:[0,2],gpu:[0,1,2,3,5,6],graph:[1,2,3,5],graph_class:0,graphbaseddimredcallback:0,graviti:0,greater:0,green:[0,3],group:[0,3],guarante:0,guess:0,guid:6,guillaum:0,gunrock:0,ha:[0,2],haas:3,handi:0,handl:0,hao:3,hard:0,has_isolated_vertic:0,have:[0,2,4],haystack:[0,3],header:0,helper:[4,5],here:[0,1],hierarchi:0,high:[0,2,3],higher:[0,3],highest:0,highlight:6,hill:0,hit:[5,6],hop:[0,6],how:[0,6],howev:[2,6],hpec:[0,1,3],hricik:3,html:0,http:[0,1,3],hub:0,hubsandauthor:0,hungarian:[3,5],hut:0,i:[0,1,6],i_start:0,ia3:[0,3],id:0,ident:0,identifi:0,ieee:[0,1,3],ignor:[0,6],ignore_nan:0,immedi:0,implement:0,implicitli:0,improv:[0,6],incid:0,includ:[0,2],incom:0,increas:0,index:[0,5],index_col:0,indic:[0,6],indptr:0,induc:0,infin:0,influenc:0,info:0,inform:[0,3,6],init:0,initi:[0,2,4],input:[0,6],input_data_path:[0,4],input_ddf:0,input_df:0,input_graph:0,input_path:0,insert:6,insid:0,instanc:0,instead:0,int32:[0,4],int64:0,integ:0,integr:2,intellig:4,inter:0,interact:2,intercept:0,interest:[0,1],intern:[0,2,3],internal_column_nam:0,intersect:0,introduct:5,irregular:[0,3],is_bipartit:0,is_direct:0,is_multigraph:0,is_multipartit:0,is_renumb:0,is_weight:0,island:0,isol:0,issu:6,iter:[0,6],iterrow:6,its:[0,2],itself:0,j:[0,1,3],jaccard:[1,5,6],jaccard_coeff:0,jaccard_coeffici:0,jaccard_w:0,jargon:2,jitter_toler:0,job:0,journal:3,journei:1,jure:3,just:[0,1,2,6],k:[3,5,6],k_core:0,k_subgraph:0,k_truss:0,kang:[1,3],karat:[0,3],katz:[3,5,6],katz_centr:0,kc:0,kcoregraph:0,keep:0,kei:0,kept:0,kim:[0,3],kleinberg:3,kmean_max_it:0,kmean_toler:0,knit:0,knn:0,knowledg:3,known:[0,2],konigsberg:2,kreb:3,ktruss_subgraph:0,l:[0,3],label:0,laid:2,lambda_max:0,lambiott:0,languag:2,larg:[0,1,3],larger:[0,4,6],largest:0,last:[3,5],later:2,latest:2,layer:2,layout:5,lazi:0,lead:0,learn:2,least:0,lefebvr:0,left:0,leiden:[5,6],length:0,leskovec:3,less:0,lesser:0,let:4,level:0,leverag:4,librari:[2,4],like:[0,6],limit:[0,2,4],lin:0,lin_log_mod:0,linear:[3,5],link:5,link_analysi:0,link_predict:0,linlog:0,list:[0,6],ll:0,load:6,local:3,localcudaclust:4,log:0,longer:0,lookup_internal_vertex_id:0,loop:0,lot:2,louvain:[5,6],low:0,lower:0,lowest:0,lusseau:3,m:[0,3],m_graph:0,machin:[2,4],magnitud:[0,6],mai:0,main:0,make:[0,1,2,4],manag:0,mani:[0,1,2],manner:0,map:0,market:2,match:[0,2,5],mathemat:[0,2,3],matric:3,matrix:[0,2],max_depth:0,max_it:[0,6],max_level:0,maxim:0,maximum:[4,5,6],maximum_spanning_tre:0,mclaughlin:3,mean:0,measur:0,mech:0,media:5,medium:[1,6],memori:[0,1,2,4],mention:2,method:0,mg:5,might:0,mimic:6,min_weight:0,mine:3,minimum:5,minimum_spanning_tre:0,mnmg:0,mode:0,model:[0,3,6],modul:[5,6],modular:0,modularity_scor:0,monoton:0,more:[0,4,6],moreov:2,most:[2,6],mostli:2,move:0,msf:0,mst:0,much:0,multi:[0,1,2,5],multigraph:[0,6],multipartit:0,multipl:[0,2,4],munguia:[0,3],must:0,muth:0,n:0,n_cluster:0,nagi:3,name:[0,2,4,6],nation:[0,3],nccl:0,ndarrai:0,need:[0,1,2],neg:0,neighbor:0,neighborhood:0,netscienc:3,network:[0,2,3,6],networkx:[0,1,2,5],never:0,newman:3,next:[4,6],node:[0,2,4,6],non:0,none:[0,6],norm:0,normal:0,note:[0,6],now:[2,4,6],np:0,np_arrai:0,np_matrix:0,nstart:0,num:0,num_clust:0,num_edg:0,num_eigen_vect:0,num_path:0,num_vert:0,number:[5,6],numer:[0,2],numpi:0,nvidia:[1,2,4],nx:6,o:[0,3],object:[0,5],obtain:0,occur:0,oct:6,offset:0,offset_col:0,on_epoch_end:0,on_preprocess_end:0,on_train_end:0,one:[0,2,4,6],onli:[0,6],oper:0,optim:0,option:0,order:[0,3,6],org:[0,3],organ:0,orgnet:3,origin:0,other:[2,4,5,6],otherwis:0,our:2,out:[0,4,6],outbound:0,outbound_attraction_distribut:0,outgo:0,output:0,over:[0,2,5],overal:0,overlap:[1,5,6],overlap_coeff:0,overlap_coeffici:0,overlap_w:0,overwrit:0,own:2,p10008:0,p2p:[0,4],p:[0,3],pad:0,page:5,pagerank:[1,3,4,5,6],pair:[0,6],panda:[0,6],paper:5,paradigm:2,parallel:[0,3,4],paramet:5,park:1,pars:0,part:[0,6],particip:0,particular:[0,1],partit:[0,3,4],partition_typ:0,pascal:2,pass:0,path:[3,5],path_data:0,patienc:0,pcol:0,pd:[0,6],pdf:[0,3],peak:0,per:[0,4,6],perfectli:6,perform:[0,2,3,6],permut:0,person:[0,6],physic:[2,3],pick:[0,6],pleas:0,plu:0,po:0,point:[0,2],pointer:0,polbook:3,polnymomi:0,portion:6,pos_list:0,pose:2,posit:0,possibl:[0,2],post:1,potterat:0,power:[0,2],powergrowth:3,pp:3,pr:0,pr_df:4,pre:0,preced:0,precis:0,precomput:0,predecessor:[0,6],predict:5,prefer:2,prep:6,preprint:3,present:[0,5],preserv:0,preserve_ord:0,prevent:0,prevent_overlap:0,print:0,prior:0,probabl:0,problem:[2,3,5],problemat:6,proceed:3,process:[0,6],produc:[0,2],progress:[0,6],project:4,properti:0,proport:3,proverbi:2,provid:[0,1],prow:0,pub:3,pull:0,push:0,python:[0,2,4],q:0,qualiti:0,question:2,quickli:[0,3],r:[0,3],radiu:0,raft:0,rais:0,random:5,random_walk:0,rang:0,rank:0,rapid:[0,1,2,3,4,6],rapidli:2,rather:[0,2,6],ratio:0,raw:0,re:4,reach:0,reachabl:0,read:6,read_csv:[0,4,6],read_util:0,reader:4,readjust:0,real:0,realli:1,reason:0,recommend:0,reconstruct:0,record:6,reduc:[0,6],ree:[1,3],refactor:1,refer:5,reflect:0,regular:0,reinterpret:0,rel:0,relationship:2,relax:0,releas:6,reli:0,rememb:0,remov:0,renumb:0,replac:[0,6],replic:0,report:[0,3],repres:[0,2],represent:0,representaion:0,repuls:0,request:0,requir:[0,6],research:3,resiz:6,resolut:0,resourc:[0,4],restart:0,restrict:2,result:[0,5],result_dtyp:0,rethink:1,retriev:0,return_dist:0,return_label:0,return_predecessor:0,return_sp_count:0,revers:0,rewrit:6,rich:6,right:0,roadmap:6,roundoff:0,rout:0,row:[0,6],run:[0,2,4,6],rw_path:0,s41598:0,s:[0,3,4],salesperson:5,same:0,sampl:5,scalar:0,scale:[0,2,4],scaling_ratio:0,schneider:3,scienc:[2,3,6],scientif:0,scientist:[1,2],scipi:[0,2],scope:2,score:[0,1,3,6],seamlessli:2,search:[5,6],second:0,secur:[0,3],see:[0,6],seed:0,seeds_offset:0,seen:0,select:1,self:0,sep:1,septemb:3,seri:0,set:[0,4,5],seven:2,sever:2,sg:0,shape:0,shift:2,shortest:[3,5,6],shortest_path:0,shortest_path_length:0,should:[0,1],shown:0,shrink:[0,3],shut:0,sid:0,sigkdd:3,signif:6,similar:[0,1],simpl:[4,6],simpli:[0,6],simplifi:6,sinc:[0,2,6],singl:[1,2,4,5,6],size:[0,4],slooten:3,slower:0,small:[0,3],smaller:0,smooth:4,smoothli:4,so:[0,2,6],social:[0,2,3],sociobiolog:3,sociolog:[2,3],sole:0,solut:[0,2,4],solv:2,solver:0,some:0,someth:6,sometim:[0,6],soon:1,sort:0,sort_neighbor:0,sound:3,sourc:[4,5,6],source_col:0,sp_counter:0,span:[2,5],spars:[0,2],special:0,specif:0,specifi:0,spectral:[5,6],spectral_clust:0,spectralbalancedcutclust:0,spectralmodularitymaximizationclust:0,speed:[0,2],spot:1,src:[0,4],src_name:0,sssp:[0,6],stabl:0,standard:0,start:0,start_vertic:0,stat:0,state:0,statist:2,statu:1,steroid:1,still:6,store:[0,2,6],str:0,strength:0,strictli:0,string:0,strong:0,strong_gravity_mod:0,strongli:[0,6],strongly_connected_compon:0,stronlgli:0,structur:[2,3,5,6],subgraph:[3,5,6],subgraph_extract:0,subset:0,suffix:0,suggest:6,suit:2,support:[0,2,4,5],svert:0,swing:0,sym_ddf:0,sym_df:0,symmetr:5,symmetrize_ddf:0,symmetrize_df:0,system:0,t:[0,3],tackl:1,take:0,taken:0,target:0,team:[1,2],technic:[0,3],techniqu:2,technolog:2,teleport:0,tend:2,term:[0,2],termin:0,terminolog:[0,5],text:6,th:0,than:[0,2,4,6],thei:0,them:0,theori:[0,2],therefor:0,thi:[0,2,6],thing:2,think:2,those:[0,2,6],three:0,through:0,thrown:0,thu:0,tighlti:0,tight:0,time:[0,6],tkdd:3,to_direct:0,to_numpy_arrai:0,to_numpy_matrix:0,to_panda:0,to_pandas_adjac:0,to_pandas_edgelist:0,to_undirect:0,tocsr:0,tol:[0,4],toler:0,too:0,tool:2,toolbox:2,total:[0,2,6],toward:0,traag:0,tractabl:0,tradeoff:0,train:0,transact:3,transform:0,transit:5,transpos:0,travel:5,traveling_salesperson:0,travers:[5,6],tree:5,triangl:[3,5,6],triangle_count:0,triangular:0,truncat:0,truss:[3,5,6],tsp:0,tupl:0,turn:0,twenti:2,two:0,type:0,typeerror:0,typic:[0,6],u:[0,3],ubiquit:[1,2],ucx:0,unchang:6,underli:0,undirect:0,unfold:0,unifi:[1,2],union:0,unlik:0,unmodifi:0,unpublish:3,unreach:0,unrenumb:0,unus:0,unweight:0,up:[0,4],updat:[0,5],updatr:6,upper:0,us:[0,1,2,3,4,5],usag:0,use_pad:0,use_weight:0,user:[0,1,2],usual:[0,2],util:2,v:0,val:0,valid:0,valu:[0,6],value_col:0,van:0,variabl:0,variant:3,varieti:2,vd:0,ve:1,verbos:0,veri:6,versa:0,version:[0,1,4],versu:[1,6],vert:0,vertex:[0,2,6],vertex_col_nam:0,vertex_pair:0,vertex_partition_offset:0,vertex_path:0,vertic:[0,4],vetex:0,vice:0,view:0,vision:[1,5],visit:0,visual:[0,1],volum:0,vs:0,wa:[0,2],wait:4,waiv:4,walk:[1,5],waltman:0,want:[0,4],we:[1,2,6],weak:0,weakli:[0,6],weakly_connected_compon:0,web:[1,3],weight:[0,6],weight_nam:0,well:[0,2],when:0,where:[0,1,2,5],whether:[0,4],which:[0,4],whose:0,wide:2,width:0,wish:0,within:[0,2,6],without:6,wjaccard:0,work:[0,2,6],worker:0,workflow:[3,4,6],workload:4,would:[0,4],woverlap:0,wrap:[0,2],wrapper:0,www:3,x:0,y:0,yalamanchili:[0,3],year:2,yellow:6,yet:0,yin:3,you:[0,4],your:[0,1,4,6],z:0,zachari:3,zero:0},titles:["cuGraph API Reference","cuGraph BLOGS and Presentations","cuGraph Introduction","References","Multi-GPU with cuGraph","Welcome to cugraph\u2019s documentation!","NetworkX Compatibility and Transition"],titleterms:{"2":0,"2019":1,"2020":1,"2021":1,"do":6,"function":0,"return":0,academ:1,acceler:6,addit:6,algorithm:[3,6],all:6,analysi:0,analyt:4,api:0,ar:6,architectur:3,argument:6,assign:0,atla:0,attribut:6,between:0,blog:1,breadth:0,build:6,central:0,cluster:0,coeffici:0,commun:0,compat:6,compon:0,connect:0,content:5,convers:0,copi:6,core:0,count:0,cugraph:[0,1,2,4,5],dask:0,data:3,differ:6,distribut:4,document:5,easi:6,ecg:0,egonet:0,ensembl:0,exactli:6,exampl:[0,4],extract:0,first:0,forc:0,format:0,from:0,gpu:4,graph:[0,4,6],helper:0,hit:0,hungarian:0,indic:5,introduct:2,jaccard:0,k:0,katz:0,last:6,layout:0,leiden:0,linear:0,link:0,louvain:0,match:6,maximum:0,media:1,mg:0,minimum:0,multi:4,networkx:6,number:0,object:6,other:[0,1,3],over:6,overlap:0,pagerank:0,paper:[1,3],paramet:0,path:[0,6],predict:0,present:1,problem:0,random:0,refer:[0,3],result:6,s:5,salesperson:0,sampl:0,search:0,set:3,shortest:0,singl:0,sourc:0,span:0,spectral:0,structur:0,subgraph:0,support:6,symmetr:0,tabl:5,terminolog:2,transit:6,travel:0,travers:0,tree:0,triangl:0,truss:0,updat:6,us:6,vision:2,walk:0,welcom:5,where:6}})