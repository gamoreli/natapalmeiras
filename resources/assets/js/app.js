
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the body of the page. From here, you may begin adding components to
 * the application, or feel free to tweak this setup for your needs.
 */

Vue.component('feedpanel');

var app = new Vue({
	el: '#vueapp',
	data:{  
		items:[  
			{  
				content:{  
					chapeu:{  
					label:"palmeiras",
					url:"http://globoesporte.globo.com/futebol/times/palmeiras/"
					},
					image:{  
					url:"s01.video.glbimg.com/deo/vi/91/23/5612391",
					cropOptions:{  

					},
					sizes:{  
						L:{  
							width:1080,
							height:608,
							url:"http://s2.glbimg.com/w_Y0GJLuD5UUz_yF93ukOx6gQYk=/1080x608/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/91/23/5612391"
						},
						M:{  
							width:810,
							height:456,
							url:"http://s2.glbimg.com/_SbHeN5Ra_gEzpzgB6QS0LdY7Dc=/810x456/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/91/23/5612391"
						},
						S:{  
							width:540,
							height:304,
							url:"http://s2.glbimg.com/WLV7IqB49kzpcTpPjO4-icc2ZxE=/540x304/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/91/23/5612391"
						},
						V:{  
							width:570,
							height:620,
							url:"http://s2.glbimg.com/Gz2sDM6Ic6aYee0jNTOlhlTzAes=/570x620/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/91/23/5612391"
						},
						XL:{  
							width:1080,
							height:608,
							url:"http://s2.glbimg.com/w_Y0GJLuD5UUz_yF93ukOx6gQYk=/1080x608/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/91/23/5612391"
						},
						XXL:{  
							width:1080,
							height:608,
							url:"http://s2.glbimg.com/w_Y0GJLuD5UUz_yF93ukOx6gQYk=/1080x608/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/91/23/5612391"
						}
					}
					},
					summary:"Meio-campista explica mudança após chegada de Eduardo Baptista e diz que é cedo para traçar panorama sobre o Verdão em 2017",
					title:"Tchê Tchê busca adaptação a novo esquema e evita avaliar Palmeiras",
					url:"http://globoesporte.globo.com/futebol/times/palmeiras/noticia/2017/01/tche-tche-busca-adaptacao-novo-esquema-e-evita-avaliar-palmeiras.html",
					video:{  
					duration:616514,
					id:5612391,
					trademark:""
					}
				},
				type:"materia",
				created:"2017-01-30T11:56:34-0200",
				lastPublication:"2017-01-30T11:56:34-0200",
				modified:"2017-01-30T11:56:34-0200",
				publication:"2017-01-30T11:56:34-0200",
				age:827,
				tenantId:"ge",
				feedId:"5e9b983f-dbf6-4eee-b7c7-62cd0f4bc14d",
				id:"8cc311abe7381723006863dc680ab177"
			},
			{  
				content:{  
					chapeu:{  
					label:"palmeiras",
					url:"http://globoesporte.globo.com/futebol/times/palmeiras/"
					},
					image:{  
					url:"http://s2.glbimg.com/lFW9GPB8-nyV8umxOh3XO0polPI=/90x68/smart/s.glbimg.com/es/ge/f/original/2017/01/30/20170130105907590_11_xI5EzAa.jpg",
					cropOptions:{  

					},
					sizes:{  
						L:{  
							width:1080,
							height:608,
							url:"http://s2.glbimg.com/zqqJL7dEAFLDwryntbs9P5Ijb44=/1080x608/top/smart/s.glbimg.com/es/ge/f/original/2017/01/30/20170130105907590_11_xI5EzAa.jpg"
						},
						M:{  
							width:810,
							height:456,
							url:"http://s2.glbimg.com/op1XCMn-sVI_4hMjXryc_kVYzJ0=/810x456/top/smart/s.glbimg.com/es/ge/f/original/2017/01/30/20170130105907590_11_xI5EzAa.jpg"
						},
						S:{  
							width:540,
							height:304,
							url:"http://s2.glbimg.com/i081RMoXHzr2i0Ow0xEOnXGc6hQ=/540x304/top/smart/s.glbimg.com/es/ge/f/original/2017/01/30/20170130105907590_11_xI5EzAa.jpg"
						},
						V:{  
							width:570,
							height:620,
							url:"http://s2.glbimg.com/oP8kBCmxEH19359CDUYMdpKq3M0=/570x620/top/smart/s.glbimg.com/es/ge/f/original/2017/01/30/20170130105907590_11_xI5EzAa.jpg"
						},
						XL:{  
							width:1080,
							height:608,
							url:"http://s2.glbimg.com/zqqJL7dEAFLDwryntbs9P5Ijb44=/1080x608/top/smart/s.glbimg.com/es/ge/f/original/2017/01/30/20170130105907590_11_xI5EzAa.jpg"
						},
						XXL:{  
							width:1080,
							height:608,
							url:"http://s2.glbimg.com/zqqJL7dEAFLDwryntbs9P5Ijb44=/1080x608/top/smart/s.glbimg.com/es/ge/f/original/2017/01/30/20170130105907590_11_xI5EzAa.jpg"
						}
					}
					},
					summary:"Alecsandro marca, e Verdão bate o time da Barra Funda, em atividade disputada na Academia de Futebol, na manhã desta segunda-feira",
					title:"Com Guerra em campo, Palmeiras vence jogo-treino contra o Nacional",
					url:"http://globoesporte.globo.com/futebol/times/palmeiras/noticia/2017/01/com-guerra-em-campo-palmeiras-vence-jogo-treino-contra-o-nacional.html"
				},
				type:"materia",
				created:"2017-01-30T11:31:22-0200",
				lastPublication:"2017-01-30T11:44:33-0200",
				modified:"2017-01-30T11:44:33-0200",
				publication:"2017-01-30T11:31:22-0200",
				age:2339,
				tenantId:"ge",
				feedId:"5e9b983f-dbf6-4eee-b7c7-62cd0f4bc14d",
				id:"6fd7f6fcdf9e34c57ac6f4386f4af34c"
			},
			{  
				content:{  
					chapeu:{  
					label:"troca de passes",
					url:"http://sportv.globo.com/site/programas/troca-de-passes/"
					},
					image:{  
					url:"s01.video.glbimg.com/deo/vi/63/14/5611463",
					cropOptions:{  

					},
					sizes:{  
						L:{  
							width:1080,
							height:608,
							url:"http://s2.glbimg.com/B5J6Pu-m9nu-C_wM8qHolx7cOGA=/1080x608/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/63/14/5611463"
						},
						M:{  
							width:810,
							height:456,
							url:"http://s2.glbimg.com/0Oy4pQEbcwL7ZbMDFg8XS3s8IrA=/810x456/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/63/14/5611463"
						},
						S:{  
							width:540,
							height:304,
							url:"http://s2.glbimg.com/QikgpGNMaTaVg7Hy-Pgt4OJB4hA=/540x304/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/63/14/5611463"
						},
						V:{  
							width:570,
							height:620,
							url:"http://s2.glbimg.com/amSHaTmqVLKUwEm62KNQywbxkTk=/570x620/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/63/14/5611463"
						},
						XL:{  
							width:1080,
							height:608,
							url:"http://s2.glbimg.com/B5J6Pu-m9nu-C_wM8qHolx7cOGA=/1080x608/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/63/14/5611463"
						},
						XXL:{  
							width:1080,
							height:608,
							url:"http://s2.glbimg.com/B5J6Pu-m9nu-C_wM8qHolx7cOGA=/1080x608/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/63/14/5611463"
						}
					}
					},
					summary:"Tiago Maranhão diz que volante é um dos mais cotados a ser titular no time de Eduardo Baptista. Lédio Carmona destaca lado competitivo do jogador",
					title:"Comentaristas elogiam estreia de Felipe Melo:           Ofensivamente eficiente",
					url:"http://sportv.globo.com/site/programas/troca-de-passes/noticia/2017/01/comentaristas-elogiam-estreia-de-felipe-melo-ofensivamente-eficiente.html",
					video:{  
					duration:96596,
					id:5611463,
					trademark:""
					}
				},
				type:"materia",
				created:"2017-01-30T09:30:56-0200",
				lastPublication:"2017-01-30T09:30:56-0200",
				modified:"2017-01-30T09:30:56-0200",
				publication:"2017-01-30T09:30:56-0200",
				age:9565,
				tenantId:"ge",
				feedId:"5e9b983f-dbf6-4eee-b7c7-62cd0f4bc14d",
				id:"a8dd1b2a10a1997c0285e104b34017b0"
			},
			{  
				content:{  
					chapeu:{  
					label:"palmeiras",
					url:"http://globoesporte.globo.com/futebol/times/palmeiras/"
					},
					image:{  
					url:"s01.video.glbimg.com/deo/vi/35/12/5611235",
					cropOptions:{  

					},
					sizes:{  
						L:{  
							width:1080,
							height:608,
							url:"http://s2.glbimg.com/8NsXDisSyzcqR5D9r6WRmP8D26E=/1080x608/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/35/12/5611235"
						},
						M:{  
							width:810,
							height:456,
							url:"http://s2.glbimg.com/IKjwo59uBrW9PM1jDDvnM3fTQMw=/810x456/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/35/12/5611235"
						},
						S:{  
							width:540,
							height:304,
							url:"http://s2.glbimg.com/jIGq3mthnRLmiZseVNF2Bx-GQIY=/540x304/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/35/12/5611235"
						},
						V:{  
							width:570,
							height:620,
							url:"http://s2.glbimg.com/l8C5ZaTB-PlRN1pQdTV6F8LqfTE=/570x620/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/35/12/5611235"
						},
						XL:{  
							width:1080,
							height:608,
							url:"http://s2.glbimg.com/8NsXDisSyzcqR5D9r6WRmP8D26E=/1080x608/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/35/12/5611235"
						},
						XXL:{  
							width:1080,
							height:608,
							url:"http://s2.glbimg.com/8NsXDisSyzcqR5D9r6WRmP8D26E=/1080x608/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/35/12/5611235"
						}
					}
					},
					summary:"Atacante diz que foi sondado por clubes brasileiros, mas que optou por permanecer no Verdão: Não quero deixar a imagem que ficou de mim",
					title:"Procurado por rivais, Barrios fala em projeto e volta por cima no Palmeiras ",
					url:"http://globoesporte.globo.com/futebol/times/palmeiras/noticia/2017/01/procurado-por-rivais-barrios-fala-em-projeto-e-volta-por-cima-no-palmeiras.html",
					video:{  
					duration:63693,
					id:5611235,
					trademark:""
					}
				},
				type:"materia",
				created:"2017-01-30T09:00:02-0200",
				lastPublication:"2017-01-30T09:00:02-0200",
				modified:"2017-01-30T09:00:02-0200",
				publication:"2017-01-30T09:00:02-0200",
				age:11419,
				tenantId:"ge",
				feedId:"5e9b983f-dbf6-4eee-b7c7-62cd0f4bc14d",
				id:"984d3dd73fc691cd1d71bb5579926102"
			},
			{  
				content:{  
					chapeu:{  
					label:"palmeiras",
					url:"http://globoesporte.globo.com/futebol/times/palmeiras/"
					},
					image:{  
					url:"s01.video.glbimg.com/deo/vi/04/13/5611304",
					cropOptions:{  

					},
					sizes:{  
						L:{  
							width:1080,
							height:608,
							url:"http://s2.glbimg.com/2W7BCzVflhZJWsKSc_FJ9zlc7u4=/1080x608/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/04/13/5611304"
						},
						M:{  
							width:810,
							height:456,
							url:"http://s2.glbimg.com/2Y3C5snufrrUQSA76XSpvK3473E=/810x456/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/04/13/5611304"
						},
						S:{  
							width:540,
							height:304,
							url:"http://s2.glbimg.com/f7SacPaNHIwI0Mklk0u8NXyArsk=/540x304/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/04/13/5611304"
						},
						V:{  
							width:570,
							height:620,
							url:"http://s2.glbimg.com/6duE0Ceda9fPLrhQv0jak53-jN8=/570x620/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/04/13/5611304"
						},
						XL:{  
							width:1080,
							height:608,
							url:"http://s2.glbimg.com/2W7BCzVflhZJWsKSc_FJ9zlc7u4=/1080x608/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/04/13/5611304"
						},
						XXL:{  
							width:1080,
							height:608,
							url:"http://s2.glbimg.com/2W7BCzVflhZJWsKSc_FJ9zlc7u4=/1080x608/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/04/13/5611304"
						}
					}
					},
					summary:"Repertório do Verdão, especialmente no primeiro tempo, faz com que empate amargo com a Ponte Preta se transforme em aplausos da torcida. E com justiça",
					title:"Análise: desempenho do Palmeiras em amistoso ofusca mau resultado",
					url:"http://globoesporte.globo.com/futebol/times/palmeiras/noticia/2017/01/analise-desempenho-do-palmeiras-em-amistoso-ofusca-mau-resultado.html",
					video:{  
					duration:423509,
					id:5611304,
					trademark:""
					}
				},
				type:"materia",
				created:"2017-01-30T07:20:04-0200",
				lastPublication:"2017-01-30T07:20:04-0200",
				modified:"2017-01-30T07:20:04-0200",
				publication:"2017-01-30T07:20:04-0200",
				age:17417,
				tenantId:"ge",
				feedId:"5e9b983f-dbf6-4eee-b7c7-62cd0f4bc14d",
				id:"742b6a7e209214d38e23f0da76ba015f"
			},
			{  
				content:{  
					chapeu:{  
					label:"palmeiras",
					url:"http://globoesporte.globo.com/futebol/times/palmeiras/"
					},
					image:{  
					url:"s01.video.glbimg.com/deo/vi/04/13/5611304",
					cropOptions:{  

					},
					sizes:{  
						L:{  
							width:1080,
							height:608,
							url:"http://s2.glbimg.com/2W7BCzVflhZJWsKSc_FJ9zlc7u4=/1080x608/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/04/13/5611304"
						},
						M:{  
							width:810,
							height:456,
							url:"http://s2.glbimg.com/2Y3C5snufrrUQSA76XSpvK3473E=/810x456/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/04/13/5611304"
						},
						S:{  
							width:540,
							height:304,
							url:"http://s2.glbimg.com/f7SacPaNHIwI0Mklk0u8NXyArsk=/540x304/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/04/13/5611304"
						},
						V:{  
							width:570,
							height:620,
							url:"http://s2.glbimg.com/6duE0Ceda9fPLrhQv0jak53-jN8=/570x620/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/04/13/5611304"
						},
						XL:{  
							width:1080,
							height:608,
							url:"http://s2.glbimg.com/2W7BCzVflhZJWsKSc_FJ9zlc7u4=/1080x608/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/04/13/5611304"
						},
						XXL:{  
							width:1080,
							height:608,
							url:"http://s2.glbimg.com/2W7BCzVflhZJWsKSc_FJ9zlc7u4=/1080x608/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/04/13/5611304"
						}
					}
					},
					summary:"Eduardo Baptista usa todas opções disponíveis no grupo antes da estreia no Paulistão e mantém mistério sobre a escalação. Quem será o titular do Verdão?",
					title:"Após testes, atacantes elogiam elenco e falam em forte disputa no Palmeiras",
					url:"http://globoesporte.globo.com/futebol/times/palmeiras/noticia/2017/01/apos-testes-atacantes-elogiam-elenco-e-falam-em-forte-disputa-no-palmeiras.html",
					video:{  
					duration:423509,
					id:5611304,
					trademark:""
					}
				},
				type:"materia",
				created:"2017-01-29T21:09:20-0200",
				lastPublication:"2017-01-29T21:09:20-0200",
				modified:"2017-01-29T21:09:20-0200",
				publication:"2017-01-29T21:09:20-0200",
				age:54061,
				tenantId:"ge",
				feedId:"5e9b983f-dbf6-4eee-b7c7-62cd0f4bc14d",
				id:"ab333b802367f45322c24ace51ed4499"
			},
			{  
				content:{  
					chapeu:{  
					label:"palmeiras",
					url:"http://globoesporte.globo.com/futebol/times/palmeiras/"
					},
					image:{  
					url:"s01.video.glbimg.com/deo/vi/76/13/5611376",
					cropOptions:{  

					},
					sizes:{  
						L:{  
							width:1080,
							height:608,
							url:"http://s2.glbimg.com/hLkJZzAeHr-wZ98SBEe2b24tLnY=/1080x608/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/76/13/5611376"
						},
						M:{  
							width:810,
							height:456,
							url:"http://s2.glbimg.com/j4jrMP1VUziaxlErEFIkIp7NBAc=/810x456/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/76/13/5611376"
						},
						S:{  
							width:540,
							height:304,
							url:"http://s2.glbimg.com/GbFHju3LFlLdN0HqhtMrXlEagEA=/540x304/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/76/13/5611376"
						},
						V:{  
							width:570,
							height:620,
							url:"http://s2.glbimg.com/yhj_QPZw7c4i2aodlf_vbnVqK2g=/570x620/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/76/13/5611376"
						},
						XL:{  
							width:1080,
							height:608,
							url:"http://s2.glbimg.com/hLkJZzAeHr-wZ98SBEe2b24tLnY=/1080x608/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/76/13/5611376"
						},
						XXL:{  
							width:1080,
							height:608,
							url:"http://s2.glbimg.com/hLkJZzAeHr-wZ98SBEe2b24tLnY=/1080x608/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/76/13/5611376"
						}
					}
					},
					summary:"Técnico diz que teste contra a Ponte Preta foi bom para a equipe, mas alerta para a necessidade de correção de erros antes da estreia no Campeonato Paulista",
					title:"Eduardo vê lição para o Palmeiras em amistoso:             Ainda não é o ideal",
					url:"http://globoesporte.globo.com/futebol/times/palmeiras/noticia/2017/01/eduardo-ve-licao-para-o-palmeiras-em-amistoso-ainda-nao-e-o-ideal.html",
					video:{  
					duration:684966,
					id:5611376,
					trademark:""
					}
				},
				type:"materia",
				created:"2017-01-29T20:15:25-0200",
				lastPublication:"2017-01-29T20:28:44-0200",
				modified:"2017-01-29T20:28:44-0200",
				publication:"2017-01-29T20:15:25-0200",
				age:57296,
				tenantId:"ge",
				feedId:"5e9b983f-dbf6-4eee-b7c7-62cd0f4bc14d",
				id:"f11f2419847b9d8845dd001ae8adb882"
			},
			{  
				content:{  
					chapeu:{  
					label:"palmeiras",
					url:"http://globoesporte.globo.com/futebol/times/palmeiras/"
					},
					image:{  
					url:"s01.video.glbimg.com/deo/vi/00/14/5611400",
					cropOptions:{  

					},
					sizes:{  
						L:{  
							width:1080,
							height:608,
							url:"http://s2.glbimg.com/spKXGZi1SUF0y5rngkZdTVpDlRQ=/1080x608/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/00/14/5611400"
						},
						M:{  
							width:810,
							height:456,
							url:"http://s2.glbimg.com/wHRdVquCTGHDYwsjGfc3A1iY4cE=/810x456/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/00/14/5611400"
						},
						S:{  
							width:540,
							height:304,
							url:"http://s2.glbimg.com/1uTMJOscxjsKyJUNsMMH1L7eq0c=/540x304/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/00/14/5611400"
						},
						V:{  
							width:570,
							height:620,
							url:"http://s2.glbimg.com/cAyfAQ4pFiTv1EkMOpGbjsBU7P0=/570x620/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/00/14/5611400"
						},
						XL:{  
							width:1080,
							height:608,
							url:"http://s2.glbimg.com/spKXGZi1SUF0y5rngkZdTVpDlRQ=/1080x608/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/00/14/5611400"
						},
						XXL:{  
							width:1080,
							height:608,
							url:"http://s2.glbimg.com/spKXGZi1SUF0y5rngkZdTVpDlRQ=/1080x608/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/00/14/5611400"
						}
					}
					},
					summary:"Técnico do Verdão decide quem será o goleiro da equipe:  É difícil tomar a decisão,mas você toma e sabe que vai estar sendo junto com a situação de hoje",
					title:"Eduardo Baptista confirma Prass como titular do Palmeiras após testes",
					url:"http://globoesporte.globo.com/futebol/times/palmeiras/noticia/2017/01/eduardo-baptista-confirma-prass-como-titular-do-palmeiras-apos-testes.html",
					video:{  
					duration:36061,
					id:5611400,
					trademark:""
					}
				},
				type:"materia",
				created:"2017-01-29T20:04:17-0200",
				lastPublication:"2017-01-29T20:44:05-0200",
				modified:"2017-01-29T20:44:05-0200",
				publication:"2017-01-29T20:04:17-0200",
				age:57964,
				tenantId:"ge",
				feedId:"5e9b983f-dbf6-4eee-b7c7-62cd0f4bc14d",
				id:"4065e6418da08ab868525e29ff4b1d47"
			},
			{  
				content:{  
					chapeu:{  
					label:"palmeiras",
					url:"http://globoesporte.globo.com/futebol/times/palmeiras/"
					},
					image:{  
					url:"s01.video.glbimg.com/deo/vi/35/12/5611235",
					cropOptions:{  

					},
					sizes:{  
						L:{  
							width:1080,
							height:608,
							url:"http://s2.glbimg.com/8NsXDisSyzcqR5D9r6WRmP8D26E=/1080x608/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/35/12/5611235"
						},
						M:{  
							width:810,
							height:456,
							url:"http://s2.glbimg.com/IKjwo59uBrW9PM1jDDvnM3fTQMw=/810x456/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/35/12/5611235"
						},
						S:{  
							width:540,
							height:304,
							url:"http://s2.glbimg.com/jIGq3mthnRLmiZseVNF2Bx-GQIY=/540x304/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/35/12/5611235"
						},
						V:{  
							width:570,
							height:620,
							url:"http://s2.glbimg.com/l8C5ZaTB-PlRN1pQdTV6F8LqfTE=/570x620/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/35/12/5611235"
						},
						XL:{  
							width:1080,
							height:608,
							url:"http://s2.glbimg.com/8NsXDisSyzcqR5D9r6WRmP8D26E=/1080x608/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/35/12/5611235"
						},
						XXL:{  
							width:1080,
							height:608,
							url:"http://s2.glbimg.com/8NsXDisSyzcqR5D9r6WRmP8D26E=/1080x608/top/smart/filters:max-age(3600)/s01.video.glbimg.com/deo/vi/35/12/5611235"
						}
					}
					},
					summary:"Atacante entra no segundo tempo, volta a marcar após quase seis meses e comenta sobre o gol: Importante converter para ter confiança e retribuir o carinho",
					title:"Confiante de novo, Barrios agradece Eduardo por chance no Palmeiras",
					url:"http://globoesporte.globo.com/futebol/times/palmeiras/noticia/2017/01/com-confianca-renovada-barrios-agradece-eduardo-por-chance.html",
					video:{  
					duration:63693,
					id:5611235,
					trademark:""
					}
				},
				type:"materia",
				created:"2017-01-29T19:29:19-0200",
				lastPublication:"2017-01-29T19:42:11-0200",
				modified:"2017-01-29T19:42:11-0200",
				publication:"2017-01-29T19:29:19-0200",
				age:60062,
				tenantId:"ge",
				feedId:"5e9b983f-dbf6-4eee-b7c7-62cd0f4bc14d",
				id:"de5bc840698fcf8e7223fa7c07abdf75"
			},
			{  
				content:{  
					chapeu:{  
					label:"palmeiras",
					url:"http://globoesporte.globo.com/futebol/times/palmeiras/"
					},
					image:{  
					url:"http://s2.glbimg.com/sfIgUt75_c-HihR1CjI_KSAnvZc=/90x68/smart/s.glbimg.com/es/ge/f/original/2014/01/12/header_palmeiras_690.jpg",
					cropOptions:{  

					},
					sizes:{  
						L:{  
							width:1080,
							height:608,
							url:"http://s2.glbimg.com/2hYBRPLkX3soPtsRno4TbXQqRF8=/1080x608/top/smart/s.glbimg.com/es/ge/f/original/2014/01/12/header_palmeiras_690.jpg"
						},
						M:{  
							width:810,
							height:456,
							url:"http://s2.glbimg.com/_ko9I2zrNh9XGI8PJgPE06dxYq8=/810x456/top/smart/s.glbimg.com/es/ge/f/original/2014/01/12/header_palmeiras_690.jpg"
						},
						S:{  
							width:540,
							height:304,
							url:"http://s2.glbimg.com/0QV8Qppj1Uxhz2QWy5Ke_BxrusY=/540x304/top/smart/s.glbimg.com/es/ge/f/original/2014/01/12/header_palmeiras_690.jpg"
						},
						V:{  
							width:570,
							height:620,
							url:"http://s2.glbimg.com/BRWvld2y5DMTY_McNl-BSZDUyLo=/570x620/top/smart/s.glbimg.com/es/ge/f/original/2014/01/12/header_palmeiras_690.jpg"
						},
						XL:{  
							width:1080,
							height:608,
							url:"http://s2.glbimg.com/2hYBRPLkX3soPtsRno4TbXQqRF8=/1080x608/top/smart/s.glbimg.com/es/ge/f/original/2014/01/12/header_palmeiras_690.jpg"
						},
						XXL:{  
							width:1080,
							height:608,
							url:"http://s2.glbimg.com/2hYBRPLkX3soPtsRno4TbXQqRF8=/1080x608/top/smart/s.glbimg.com/es/ge/f/original/2014/01/12/header_palmeiras_690.jpg"
						}
					}
					},
					summary:"Paraguaio aproveita chance e marca de cabeça no segundo tempo, após quase seis meses. Volante é destaque do empate por 1 a 1 com a Ponte Preta, na arena",
					title:"Atuações do Palmeiras: Felipe Melo sai aplaudido, e Barrios coloca fim a jejum",
					url:"http://globoesporte.globo.com/futebol/times/palmeiras/noticia/2017/01/atuacoes-do-palmeiras-felipe-melo-sai-aplaudido-e-barrios-coloca-fim-jejum.html"
				},
				type:"materia",
				created:"2017-01-29T19:08:30-0200",
				lastPublication:"2017-01-29T19:08:30-0200",
				modified:"2017-01-29T19:08:30-0200",
				publication:"2017-01-29T19:08:30-0200",
				age:61311,
				tenantId:"ge",
				feedId:"5e9b983f-dbf6-4eee-b7c7-62cd0f4bc14d",
				id:"8d24152fd11355cea2767d1123be526a"
			}
		],
		limit:10,
		nextPage:2
	},
	beforeCreate: function () {
		  this.$options.components.feedpanel = require('./components/FeedPanel.vue')

	}
});

// app.$http.get('http://falkor-cda.bastian.globo.com/feeds/5e9b983f-dbf6-4eee-b7c7-62cd0f4bc14d/posts/page/1').then(response => {
// 	// this.items = response.body;
// 	console.log(response);
// },response => {
// 	console.log("erro");
// });
